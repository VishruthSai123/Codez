import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

// Routes that require authentication
const PROTECTED_PREFIXES = [
  '/learn',
  '/courses',
  '/shop',
  '/leaderboard',
  '/quests',
  '/lesson',
  '/admin',
  '/discover',
  '/onboarding',
  '/profile',
  '/settings',
]

// Routes that authenticated users should NOT see (redirect to /learn)
const AUTH_ROUTES = ['/login', '/signup']

export default async function proxy(request: NextRequest) {
  // 1. Refresh the session (handles cookie sync)
  const response = await updateSession(request)

  // 2. Build a supabase client that reads cookies from the *updated* request
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll() {
          // no-op – cookies are already set by updateSession
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const { pathname } = request.nextUrl

  // 3. Redirect unauthenticated users away from protected routes
  const isProtected = PROTECTED_PREFIXES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )

  if (!user && isProtected) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/login'
    loginUrl.searchParams.set('redirect', pathname)
    
    // Copy cookies to redirect response to avoid losing session state
    const redirectResponse = NextResponse.redirect(loginUrl)
    response.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value, cookie)
    })
    return redirectResponse
  }

  // 4. Redirect authenticated users away from auth routes
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )

  if (user && isAuthRoute) {
    const learnUrl = request.nextUrl.clone()
    learnUrl.pathname = '/learn'
    
    // Copy cookies to redirect response to avoid losing session state
    const redirectResponse = NextResponse.redirect(learnUrl)
    response.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value, cookie)
    })
    return redirectResponse
  }

  // 5. Protect admin routes — only allowed user IDs
  if (user && pathname.startsWith('/admin')) {
    const adminIds = (process.env.ADMIN_USER_IDS || '').split(', ').filter(Boolean)
    if (!adminIds.includes(user.id)) {
      const learnUrl = new URL('/learn', request.url)
      const redirectResponse = NextResponse.redirect(learnUrl)
      response.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie.name, cookie.value, cookie)
      })
      return redirectResponse
    }
  }

  // 6. Protect API routes (except webhooks which are public)
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/webhooks')) {
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - Static assets (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp3|wav)$).*)',
  ],
}

// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // supabase
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

      // stripe api key and webhook
      STRIPE_API_SECRET_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;

      // public app url
      NEXT_PUBLIC_APP_URL: string;

      // admin user id(s) (separated by comma(,) and space( )). Ex: "user_123, user_456"
      ADMIN_USER_IDS: string;
    }
  }
}

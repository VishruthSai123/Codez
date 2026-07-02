import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getIsAdmin } from "@/lib/admin";

export const GET = async () => {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });
  const supabase = await createClient();
  const { data, error, count } = await supabase.from("challenges").select("*", { count: 'exact' });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return new NextResponse(JSON.stringify(data), {
    headers: {
      "Content-Range": `challenges 0-${data ? data.length : 0}/${count}`,
    },
  });
};

export const POST = async (req: NextRequest) => {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });
  const body = await req.json();
  const supabase = await createClient();
  const { data, error } = await supabase.from("challenges").insert(body).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

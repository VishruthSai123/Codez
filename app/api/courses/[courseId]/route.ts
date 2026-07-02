import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { getIsAdmin } from "@/lib/admin";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) => {
  const { courseId } = await params;
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });

  const supabase = await createClient();
  const { data, error } = await supabase.from("courses").select("*").eq("id", Number(courseId)).single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) => {
  const { courseId } = await params;
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });

  const body = await req.json();
  const supabase = await createClient();
  const { data, error } = await supabase.from("courses").update(body).eq("id", Number(courseId)).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) => {
  const { courseId } = await params;
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });

  const supabase = await createClient();
  const { data, error } = await supabase.from("courses").delete().eq("id", Number(courseId)).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

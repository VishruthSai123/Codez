import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getIsAdmin } from "@/lib/admin";

export const GET = async (_req: NextRequest, { params }: { params: Promise<{ unitId: string }> }) => {
  const { unitId } = await params;
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });
  const supabase = await createClient();
  const { data, error } = await supabase.from("units").select("*").eq("id", Number(unitId)).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

export const PUT = async (req: NextRequest, { params }: { params: Promise<{ unitId: string }> }) => {
  const { unitId } = await params;
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });
  const body = await req.json();
  const supabase = await createClient();
  const { data, error } = await supabase.from("units").update(body).eq("id", Number(unitId)).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

export const DELETE = async (_req: NextRequest, { params }: { params: Promise<{ unitId: string }> }) => {
  const { unitId } = await params;
  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized.", { status: 401 });
  const supabase = await createClient();
  const { data, error } = await supabase.from("units").delete().eq("id", Number(unitId)).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
};

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export async function POST(request:Request){
 try{
  const sb=createClient();const {data:{user}}=await sb.auth.getUser();if(!user)return NextResponse.json({error:"Sign in first."},{status:401});
  const {data:profile}=await sb.from("profiles").select("role").eq("id",user.id).maybeSingle();if(profile?.role!=="admin")return NextResponse.json({error:"Admin access required."},{status:403});
  const b=await request.json();if(!b.title||!["Movie","Series"].includes(b.kind))return NextResponse.json({error:"A title and valid type are required."},{status:400});
  const {data,error}=await sb.from("titles").insert({...b,created_by:user.id}).select().single();if(error)throw error;return NextResponse.json({title:data});
 }catch(e:any){return NextResponse.json({error:e.message||"Could not save title."},{status:500});}
}
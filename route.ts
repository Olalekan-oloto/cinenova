import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
const PLANS:Record<string,number>={Basic:2890,Standard:5770,Premium:8890}; // NGN amount in kobo, not USD conversion.
export async function POST(request:Request){
 try{
  const sb=createClient();const {data:{user}}=await sb.auth.getUser();if(!user)return NextResponse.json({error:"Please sign in before choosing a membership."},{status:401});
  const {plan}=await request.json();const amount=PLANS[plan];if(!amount)return NextResponse.json({error:"Choose a valid plan."},{status:400});
  const secret=process.env.PAYSTACK_SECRET_KEY;if(!secret||secret.includes("REPLACE_ME"))return NextResponse.json({error:"Paystack is not configured yet. Add PAYSTACK_SECRET_KEY in your deployment environment."},{status:503});
  const origin=process.env.NEXT_PUBLIC_SITE_URL||new URL(request.url).origin;
  const response=await fetch("https://api.paystack.co/transaction/initialize",{method:"POST",headers:{"Authorization":`Bearer ${secret}`,"Content-Type":"application/json"},body:JSON.stringify({email:user.email,amount,currency:"NGN",callback_url:`${origin}/api/payments/verify`,metadata:{user_id:user.id,plan}}),cache:"no-store"});
  const result=await response.json();if(!response.ok||!result.status)return NextResponse.json({error:result.message||"Payment initialization failed."},{status:400});
  return NextResponse.json({authorization_url:result.data.authorization_url,reference:result.data.reference});
 }catch(e:any){return NextResponse.json({error:e.message||"Payment could not be initialized."},{status:500});}
}
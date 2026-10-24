import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./signout";
export const dynamic="force-dynamic";
export default async function AccountPage(){
 const sb=createClient();const {data:{user}}=await sb.auth.getUser();if(!user)redirect("/login");
 const {data:sub}=await sb.from("subscriptions").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(1).maybeSingle();
 return <main className="accountPage"><header className="nav"><Link href="/" className="brand">✦ CINE<span>NOVA</span></Link><SignOutButton/></header><section className="accountCard"><p className="eyebrow">YOUR ACCOUNT</p><h1>Welcome to CineNova.</h1><p>Signed in as <strong>{user.email}</strong></p><div className="accountInfo"><h2>Membership</h2><p>{sub?`${sub.plan} · ${sub.status}`:"No active membership found."}</p><p className="muted">Payments and subscription records appear here after the payment provider is connected and webhook is configured.</p></div><Link href="/#plans" className="btn primary">Explore memberships</Link><Link href="/" className="btn ghost">Back to browse</Link></section></main>
}
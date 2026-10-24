import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminForm from "./form";
export const dynamic="force-dynamic";
export default async function AdminPage(){
 const sb=createClient();const {data:{user}}=await sb.auth.getUser();if(!user)redirect("/login");
 const {data:profile}=await sb.from("profiles").select("role").eq("id",user.id).maybeSingle();
 if(profile?.role!=="admin") return <main className="authPage"><section className="authCard"><p className="eyebrow">CINENOVA ADMIN</p><h1>Restricted area</h1><p>This account does not have admin permissions. Set your own account role to admin in the Supabase SQL editor after creating the account.</p><Link href="/account" className="btn primary full">Back to account</Link></section></main>;
 const {data:titles}=await sb.from("titles").select("*").order("created_at",{ascending:false});
 return <main className="adminPage"><header className="nav"><Link href="/" className="brand">✦ CINE<span>NOVA</span></Link><Link href="/account" className="login">Account</Link></header><section className="adminWrap"><p className="eyebrow">CATALOGUE CONTROL</p><h1>Admin dashboard</h1><p>Add and publish catalogue entries. Playback URLs must come from a licensed streaming provider.</p><AdminForm/><h2>Catalogue ({titles?.length||0})</h2><div className="adminList">{(titles||[]).map(t=><div key={t.id}><span><strong>{t.title}</strong><small>{t.kind} · {t.published?"Published":"Draft"}</small></span><span>{t.year||"—"}</span></div>)}</div></section></main>
}
import CineNovaApp from "./ui/CineNovaApp";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  let titles: any[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("titles").select("*").eq("published", true).order("created_at", { ascending: false }).limit(40);
    titles = data ?? [];
  } catch {}
  return <CineNovaApp initialTitles={titles} />;
}
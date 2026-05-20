import { createServerSupabase } from '../supabaseServer';

export function getSidebarTable() {
  const supabase = createServerSupabase();

  return supabase.from('sidebar_links');
}

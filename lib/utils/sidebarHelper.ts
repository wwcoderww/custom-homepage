import { createServerSupabase } from '../supabaseServer';

export function getTable(tableName: string) {
  const supabase = createServerSupabase();

  return supabase.from(tableName);
}

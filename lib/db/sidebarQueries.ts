import { createServerSupabase } from '../supabaseServer';
import { getTable } from '../utils/sidebarHelper';

export function getSidebarLinks(tableName: string) {
  return getTable(tableName).select('*');
}

export function postSidebarLink(
  tableName: string,
  label: string,
  link: string
) {
  return getTable(tableName).insert([{ label, link }]);
}

export function deleteSidebarLink(tableName: string, id: string) {
  return getTable(tableName).delete().eq('id', id);
}

export function putSidebarLabel(tableName: string, id: string, label: string) {
  return getTable(tableName).update({ label }).eq('id', id);
}

export function putSidebarLink(tableName: string, id: string, link: string) {
  return getTable(tableName).update({ link }).eq('id', id);
}

export function reorderSidebarLink(
  functionName: string,
  id: number,
  order: number
) {
  const supabase = createServerSupabase();

  return supabase.rpc(functionName, { moving_id: id, new_order: order });
}

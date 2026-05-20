import { createServerSupabase } from '../supabaseServer';
import { getSidebarTable } from '../utils/sidebarHelper';

export function getSidebarLinks() {
  return getSidebarTable().select('*');
}

export function postSidebarLink(label: string, link: string) {
  return getSidebarTable().insert([{ label, link }]);
}

export function deleteSidebarLink(id: string) {
  return getSidebarTable().delete().eq('id', id);
}

export function putSidebarLabel(id: string, label: string) {
  return getSidebarTable().update({ label }).eq('id', id);
}

export function putSidebarLink(id: string, link: string) {
  return getSidebarTable().update({ link }).eq('id', id);
}

export function reorderSidebarLink(id: number, order: number) {
  const supabase = createServerSupabase();

  return supabase.rpc('reorder_links', { moving_id: id, new_order: order });
}

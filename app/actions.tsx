'use server';

import { createServerSupabase } from '@/lib/supabaseServer';
import { QuickLinkType } from '@/lib/types';

export async function addLink(formData: FormData) {
  console.log('Test');
  const supabase = createServerSupabase();

  const label = formData.get('label') as string;
  const link = formData.get('link') as string;

  const { error } = await supabase
    .from('sidebar_links')
    .insert([{ label, link }]);

  if (error) {
    console.log(error);
    return;
  }
}

export async function loadLinks(): Promise<QuickLinkType[]> {
  const supaBase = createServerSupabase();

  const { error, data } = await supaBase.from('sidebar_links').select('*');

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export async function deleteLink(item: QuickLinkType) {
  const supaBase = createServerSupabase();

  const { error } = await supaBase
    .from('sidebar_links')
    .delete()
    .eq('id', item.id);

  if (error) console.log(error);
}

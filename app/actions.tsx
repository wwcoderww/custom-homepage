'use server';

import { createServerSupabase } from '@/lib/supabaseServer';
import { QuickLinkType } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function loadLinks(): Promise<QuickLinkType[]> {
  const supaBase = createServerSupabase();

  const { error, data } = await supaBase.from('sidebar_links').select('*');

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

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

export async function deleteLink(item: QuickLinkType) {
  const supaBase = createServerSupabase();

  const { error } = await supaBase
    .from('sidebar_links')
    .delete()
    .eq('id', item.id);

  if (error) console.log(error);
}

export async function updateLink(formData: FormData) {
  const supaBase = createServerSupabase();

  const link = formData.get('link') as string;
  const id = formData.get('id') as string;

  const { error } = await supaBase
    .from('sidebar_links')
    .update({ link })
    .eq('id', id);

  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

export async function updateLabel(formData: FormData) {
  const supaBase = createServerSupabase();

  const label = formData.get('label') as string;
  const id = formData.get('id') as string;

  const { error } = await supaBase
    .from('sidebar_links')
    .update({ label })
    .eq('id', id);

  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

export async function updateOrder(formData: FormData) {
  const supaBase = createServerSupabase();

  const display_order = Number(formData.get('order'));
  const id = Number(formData.get('id'));

  const { error } = await supaBase.rpc('reorder_link', {
    moving_id: id,
    new_order: display_order,
  });

  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

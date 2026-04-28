'use server';

import { createServerSupabase } from '@/lib/supabaseServer';

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

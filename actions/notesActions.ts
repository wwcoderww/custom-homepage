'use server';
import { supabase } from '@/lib/supabaseClient';
import { createServerSupabase } from '@/lib/supabaseServer';

export async function getNotes() {
  const { data, error } = await supabase
    .from('notes')
    .select('typed')
    .eq('id', 1)
    .single();

  if (error) {
    console.log(error);
    return '';
  }

  return data.typed;
}

export async function putNotes(typed: string) {
  const supabase = createServerSupabase();

  const { error } = await supabase.from('notes').update({ typed }).eq('id', 1);

  return error;
}

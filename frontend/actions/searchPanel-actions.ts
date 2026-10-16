'use server';

import { QuickLinkType } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function loadLinks(tableName: string): Promise<QuickLinkType[]> {
  const res = await fetch(
    `https://custom-homepage.onrender.com/api/${tableName}`
  );
  if (!res.ok) {
    console.log(res);
  }
  const results = await res.json();
  return results.data;
}

export async function addLink(tableName: string, formData: FormData) {
  // User input
  // const label = formData.get('name') as string;
  // const formLink = formData.get('link') as string;
  // // Reformat
  // let link = formLink.startsWith('http') ? formLink : 'https://' + formLink;
  // link = link.includes('.') ? link : link + '.com';
  // // POST to db / Errors
  // const res = await fetch(
  //   `https://custom-homepage.onrender.com/api/${tableName}`,
  //   {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ label, link }),
  //   }
  // );
  // // If response is not 200
  // if (!res.ok) {
  //   return console.error(await res.text());
  // }
  // // If response has errors
  // const results = await res.json();
  // if (results.error) {
  //   return console.error(results);
  // }
  // Refresh
  revalidatePath('/');
}

export async function deleteLink(tableName: string, id: string) {
  // DELETE to db / Errors
  // const { error } = await deleteSidebarLink(tableName, id);
  // if (error) console.log(error);
  console.log('test');
}

export async function updateLink(formData: FormData) {
  // Form Data
  // const link = formData.get('link') as string;
  // const id = formData.get('id') as string;
  // const tableName = formData.get('tableName') as string;
  // // PUT to db / Errors
  // const { error } = await putSidebarLink(tableName, id, link);
  // if (error) {
  //   console.log(error);
  //   return;
  // }

  revalidatePath('/');
}

export async function updateLabel(formData: FormData) {
  // Form Data
  // const label = formData.get('label') as string;
  // const id = formData.get('id') as string;
  // const tableName = formData.get('tableName') as string;
  // // PUT to db / Errors
  // const { error } = await putSidebarLabel(tableName, id, label);
  // if (error) {
  //   console.log(error);
  //   return;
  // }

  revalidatePath('/');
}

export async function updateOrder(formData: FormData) {
  // Form Data
  // const id = Number(formData.get('id'));
  // const display_order = Number(formData.get('order'));
  // const tableName = formData.get('tableName') as string;
  // // Errors
  // const { error } = await reorderSidebarLink(tableName, id, display_order);
  // if (error) {
  //   console.log(error);
  //   return;
  // }

  revalidatePath('/');
}

'use server';
import { BackEndResponseType, QuickLinkType } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import tryBackend from '@/lib/try-backend';

export async function loadLinks(
  userId: string,
  tableName: string
): Promise<QuickLinkType[] | []> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/${tableName}/${userId}`
  );
  if (!res.ok) {
    console.error(`Failed to load links from ${tableName}`);
    return [];
  }
  const results = await res.json();
  return results.data;
}

export async function addLink(
  tableName: string,
  formData: FormData
): Promise<BackEndResponseType> {
  // User input
  const name = formData.get('name') as string;
  const formLink = formData.get('link') as string;
  const userId = formData.get('userId') as string;
  // Reformat link
  let link = formLink.startsWith('http') ? formLink : 'https://' + formLink;
  if (!link.includes('.')) link += '.com';
  // POST to db / Errors
  const fetchPromise = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/${tableName}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, name, link }),
    }
  );
  return tryBackend(fetchPromise);
}

export async function deleteLink(tableName: string, id: string) {
  const fetchPromise = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/${tableName}/${id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return tryBackend(fetchPromise);
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

'use server';

import {
  deleteSidebarLink,
  getSidebarLinks,
  postSidebarLink,
  putSidebarLabel,
  putSidebarLink,
  reorderSidebarLink,
} from '@/lib/db/sidebarQueries';

import { QuickLinkType } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function loadLinks(tableName: string): Promise<QuickLinkType[]> {
  // GET from db
  const { error, data } = await getSidebarLinks(tableName);
  // Errors
  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export async function addLink(tableName: string, formData: FormData) {
  // User input
  const label = formData.get('label') as string;
  const formLink = formData.get('link') as string;
  // Validation
  if (label === '') return;
  // Reformat
  let link = formLink.startsWith('http') ? formLink : 'https://' + formLink;
  link = link.includes('.') ? link : link + '.com';
  // POST to db / Errors
  console.log(link);
  const { error } = await postSidebarLink(tableName, label, link);
  if (error) {
    console.log(error);
    return;
  }
  // Refresh
  revalidatePath('/');
}

export async function deleteLink(tableName: string, id: string) {
  // DELETE to db / Errors
  const { error } = await deleteSidebarLink(tableName, id);
  if (error) console.log(error);
}

export async function updateLink(formData: FormData) {
  // Form Data
  const link = formData.get('link') as string;
  const id = formData.get('id') as string;
  const tableName = formData.get('tableName') as string;
  // PUT to db / Errors
  const { error } = await putSidebarLink(tableName, id, link);
  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

export async function updateLabel(formData: FormData) {
  // Form Data
  const label = formData.get('label') as string;
  const id = formData.get('id') as string;
  const tableName = formData.get('tableName') as string;
  // PUT to db / Errors
  const { error } = await putSidebarLabel(tableName, id, label);
  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

export async function updateOrder(formData: FormData) {
  // Form Data
  const id = Number(formData.get('id'));
  const display_order = Number(formData.get('order'));
  const tableName = formData.get('tableName') as string;
  // Errors
  const { error } = await reorderSidebarLink(tableName, id, display_order);
  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

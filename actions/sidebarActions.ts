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

export async function loadLinks(): Promise<QuickLinkType[]> {
  // GET from db
  const { error, data } = await getSidebarLinks();
  // Errors
  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export async function addLink(formData: FormData) {
  // User input
  const label = formData.get('label') as string;
  const formLink = formData.get('link') as string;
  // Validation
  if (label === '') return;
  // Reformat
  const link = formLink.startsWith('http') ? formLink : 'https://' + formLink;
  // POST to db / Errors
  const { error } = await postSidebarLink(label, link);
  if (error) {
    console.log(error);
    return;
  }
  // Refresh
  revalidatePath('/');
}

export async function deleteLink(id: string) {
  // DELETE to db / Errors
  const { error } = await deleteSidebarLink(id);
  if (error) console.log(error);
}

export async function updateLink(formData: FormData) {
  // Form Data
  const link = formData.get('link') as string;
  const id = formData.get('id') as string;
  // PUT to db / Errors
  const { error } = await putSidebarLink(id, link);
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
  // PUT to db / Errors
  const { error } = await putSidebarLabel(id, label);
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
  // Errors
  const { error } = await reorderSidebarLink(id, display_order);
  if (error) {
    console.log(error);
    return;
  }

  revalidatePath('/');
}

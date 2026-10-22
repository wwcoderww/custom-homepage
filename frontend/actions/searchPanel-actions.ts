'use server';
import tryBackend from '@/lib/try-backend';
import { BackEndResponseType, QuickLinkType } from '@/lib/types';
import reformatLink from '@/utils/reformatLink';

export async function loadLinks(userId: string): Promise<QuickLinkType[] | []> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/links/${userId}`
  );
  if (!res.ok) {
    console.error(`Failed to load links`);
    return [];
  }
  const results = await res.json();
  return results.data;
}

export async function addLink(
  formData: FormData
): Promise<BackEndResponseType> {
  // User input
  const name = formData.get('name') as string;
  const formLink = formData.get('link') as string;
  const userId = formData.get('userId') as string;
  const group = Number(formData.get('group'));
  // Reformat link
  const link = reformatLink(formLink);
  // POST to db / Errors
  const fetchPromise = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/links`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, name, link, group }),
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
  const name = formData.get('name') as string;
  const formLink = formData.get('link') as string;
  const id = formData.get('id') as string;
  const tableName = formData.get('tableName') as string;
  const displayOrder = Number(formData.get('displayOrder')) || 0;
  const link = reformatLink(formLink);
  const fetchPromise = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/${tableName}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, link, displayOrder }),
    }
  );
  return tryBackend(fetchPromise);
}

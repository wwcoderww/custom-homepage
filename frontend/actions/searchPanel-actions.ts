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

export type AddLinkPayload = {
  name: string;
  link: string;
  userId: string;
  group: number;
};

export async function addLink(
  data: AddLinkPayload
): Promise<BackEndResponseType> {
  // Reformat link
  data.link = reformatLink(data.link);
  console.log(data);
  // POST to db / Errors
  const fetchPromise = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/links`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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

export type UpdateLinkPayload = {
  name: string;
  link: string;
  id: string;
  group: number;
  displayOrder: number;
  userId: string;
};

export async function updateLink(data: UpdateLinkPayload) {
  data.link = reformatLink(data.link);
  const fetchPromise = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/links`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  );
  return tryBackend(fetchPromise);
}

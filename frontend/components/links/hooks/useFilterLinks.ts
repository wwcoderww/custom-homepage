'use client';

import { QuickLinkType } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

export function useFilteredLinks(links: QuickLinkType[], group: number) {
  const searchParams = useSearchParams();
  if (!links || !Array.isArray(links) || links.length === 0) return [];
  const query = searchParams.get('sblinks')?.toLowerCase() || '';
  const filteredLinks = links.filter(
    (item) =>
      item.name.toLocaleLowerCase().includes(query) && item.group === group
  );
  return [...filteredLinks].sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
  );
}

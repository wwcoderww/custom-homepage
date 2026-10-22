'use client';

import { QuickLinkType } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useFilteredLinks(
  links: QuickLinkType[],
  group: number,
  paramName: string
) {
  const searchParams = useSearchParams();
  const query = searchParams.get(paramName)?.toLowerCase() || '';

  return useMemo(() => {
    if (!links || !Array.isArray(links) || links.length === 0) return [];
    const filteredLinks = links.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(query) && item.group === group
    );
    const sortedLinks = [...filteredLinks].sort(
      (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
    );
    return sortedLinks;
  }, [links, query, group]);
}

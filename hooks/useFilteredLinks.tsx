'use client';
import { QuickLinkType } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

export function useFilteredLinks(links: QuickLinkType[]) {
  const searchParams = useSearchParams();
  const query = searchParams.get('sblinks')?.toLowerCase() || '';
  const filteredLinks = links.filter((item) =>
    item.label.toLocaleLowerCase().includes(query)
  );
  return filteredLinks.sort((a, b) => a.display_order - b.display_order);
}

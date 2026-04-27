'use client';
import { useSearchParams } from 'next/navigation';

const quickLinks: QuickLinkType[] = [
  { label: 'Github' },
  { label: 'TailwindCSS' },
  { label: 'RoadMap' },
  { label: 'Supabase' },
  { label: 'Gmail' },
  { label: 'Capital One' },
];

type QuickLinkType = {
  label: string;
};

export function useFilteredLinks() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const filteredLinks = quickLinks.filter((item) =>
    item.label.toLocaleLowerCase().includes(query)
  );
  return filteredLinks;
}

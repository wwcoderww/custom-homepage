'use client';
import { useSearchParams } from 'next/navigation';
import SidebarLi from './SidebarLi';

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

export default function SidebarList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const filteredLinks = quickLinks.filter((item) =>
    item.label.toLocaleLowerCase().includes(query)
  );

  return (
    <ul className="flex flex-col gap-4">
      {filteredLinks.map((value) => (
        <SidebarLi label={value.label} key={value.label} />
      ))}
    </ul>
  );
}

'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import SidebarLi from './SidebarLi';

export default function SidebarList() {
  const filteredLinks = useFilteredLinks();

  return (
    <ul className="flex flex-col gap-4">
      {filteredLinks.map((value) => (
        <SidebarLi label={value.label} key={value.label} />
      ))}
    </ul>
  );
}

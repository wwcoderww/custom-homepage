'use client';
import { useSidebarContext } from '@/context/SidebarContext';
import SidebarOverlay from './SidebarOverlay';
import SidebarUl from './SidebarUl';

export default function SidebarList() {
  const { filteredLinks, selectedID } = useSidebarContext();

  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  return (
    <>
      {selected && <SidebarOverlay selected={selected} />}
      <SidebarUl />
    </>
  );
}

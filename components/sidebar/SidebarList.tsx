'use client';
import { useSidebarContext } from '@/context/SidebarContext';
import SidebarOverlay from './SidebarOverlay';
import SidebarUl from './SidebarUl';

export default function SidebarList() {
  const { selected } = useSidebarContext();

  return (
    <>
      {selected && <SidebarOverlay />}
      <SidebarUl />
    </>
  );
}

'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import useParamMode from '@/hooks/useParamMode';
import { QuickLinkType } from '@/lib/types';
import { useState } from 'react';
import SidebarOverlay from './SidebarOverlay';
import SidebarUl from './SidebarUl';

type SideBarListProps = {
  initialLinks: QuickLinkType[];
};

export default function SidebarList({ initialLinks }: SideBarListProps) {
  const filteredLinks = useFilteredLinks(initialLinks);
  const { isEditing } = useParamMode();

  const [selectedID, setSelectedID] = useState<string | null>(null);

  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  return (
    <>
      {selected && (
        <SidebarOverlay selected={selected} setSelectedID={setSelectedID} />
      )}
      <SidebarUl
        setSelectedID={setSelectedID}
        isEditing={isEditing}
        filteredLinks={filteredLinks}
      />
    </>
  );
}

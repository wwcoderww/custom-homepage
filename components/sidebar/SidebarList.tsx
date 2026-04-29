'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import SidebarLi from './SidebarLi';
import { MdDeleteOutline } from 'react-icons/md';
import useParamMode from '@/hooks/useParamMode';
import { QuickLinkType } from '@/lib/types';

type SideBarListProps = {
  initialLinks: QuickLinkType[];
};

export default function SidebarList({ initialLinks }: SideBarListProps) {
  const filteredLinks = useFilteredLinks(initialLinks);
  const { isEditing } = useParamMode();

  return (
    <ul className="flex flex-col gap-4">
      {filteredLinks.map((value) => (
        <div key={value.id} className="flex">
          <SidebarLi label={value.label} />
          {isEditing && (
            <MdDeleteOutline className="w-auto hover:cursor-pointer h-full hover:text-blue-600" />
          )}
        </div>
      ))}
    </ul>
  );
}

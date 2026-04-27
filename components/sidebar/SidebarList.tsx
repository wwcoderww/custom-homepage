'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import SidebarLi from './SidebarLi';
import { MdDeleteOutline } from 'react-icons/md';
import useIsEditing from '@/hooks/useIsEditing';

export default function SidebarList() {
  const filteredLinks = useFilteredLinks();
  const { isEditing } = useIsEditing();

  return (
    <ul className="flex flex-col gap-4">
      {filteredLinks.map((value) => (
        <div key={value.label} className="flex">
          <SidebarLi label={value.label} />
          {isEditing && (
            <MdDeleteOutline className="h-5/6 w-auto hover:cursor-pointer hover:h-full" />
          )}
        </div>
      ))}
    </ul>
  );
}

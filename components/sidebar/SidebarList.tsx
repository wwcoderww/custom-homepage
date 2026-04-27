'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import SidebarLi from './SidebarLi';
import { MdDeleteOutline } from 'react-icons/md';
import useParamMode from '@/hooks/useParamMode';

export default function SidebarList() {
  const filteredLinks = useFilteredLinks();
  const { isEditing } = useParamMode();

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

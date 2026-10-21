'use client';
import { MdDeleteOutline } from 'react-icons/md';
import { useLinksContext } from '../context/links-context';
import SidebarLi from './list-item';
import useDeleteLink from '@/hooks/useDeleteLink';

export default function SidebarUl() {
  const { setSelectedID, filteredLinks, isEditing, tableName, userId } =
    useLinksContext();
  const mutate = useDeleteLink(tableName, userId);

  return (
    <ul className="z-20 flex flex-col gap-3">
      {filteredLinks.map((item) => (
        <div key={item.id} className="flex">
          <SidebarLi item={item} handleClick={() => setSelectedID(item.id)} />
          {isEditing && (
            <MdDeleteOutline
              className="h-full w-auto hover:cursor-pointer hover:text-blue-600"
              onClick={() => mutate(item.id)}
            />
          )}
        </div>
      ))}
    </ul>
  );
}

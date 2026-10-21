'use client';
import { MdDeleteOutline } from 'react-icons/md';
import useDeleteLink from '@/hooks/useDeleteLink';
import SidebarLi from './linkList/list-item';
import { useLinksContext } from './context/links-context';
import Overlay from './linkList/overlay';

export default function LinksList() {
  const {
    setSelectedID,
    filteredLinks,
    isEditing,
    isViewing,
    tableName,
    userId,
  } = useLinksContext();
  const mutate = useDeleteLink(tableName, userId);

  return (
    <>
      <ul className={`${!isViewing && 'relative z-20'} flex flex-col gap-3`}>
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
      <Overlay />
    </>
  );
}

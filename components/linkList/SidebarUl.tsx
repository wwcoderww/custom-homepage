'use client';
import { deleteLink } from '@/actions/sidebarActions';
import { QuickLinkType } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdDeleteOutline } from 'react-icons/md';
import SidebarLi from './SidebarLi';
import { useLinkListContext } from './context/LinkListContext';

export default function SidebarUl() {
  const { setSelectedID, filteredLinks, paramName, tableName } =
    useLinkListContext();
  const router = useRouter();
  const params = useSearchParams();

  const isEditing = params.get('mode' + paramName) === 'edit';
  // Handles click for each li
  function handleClick(item: QuickLinkType) {
    if (!isEditing) return;
    setSelectedID(item.id);
  }
  // Delete Link
  async function handleDelete(id: string) {
    await deleteLink(tableName, id);
    router.refresh();
  }

  return (
    <ul className="flex flex-col gap-3">
      {filteredLinks.map((item) => (
        <div key={item.id} className="flex">
          <SidebarLi
            item={item}
            handleClick={() => handleClick(item)}
            isEditing={isEditing}
          />
          {isEditing && (
            <MdDeleteOutline
              className="h-full w-auto hover:cursor-pointer hover:text-blue-600"
              onClick={() => handleDelete(item.id)}
            />
          )}
        </div>
      ))}
    </ul>
  );
}

'use client';
import { deleteLink } from '@/actions/sidebarActions';
import { QuickLinkType } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';
import SidebarLi from './SidebarLi';
import { MdDeleteOutline } from 'react-icons/md';
import { useSidebarContext } from '@/context/SidebarContext';

export default function SidebarUl() {
  const { setSelectedID, filteredLinks, paramName } = useSidebarContext();
  const router = useRouter();
  const params = useSearchParams();

  const isEditing = params.get(paramName) === 'edit';
  // Handles click for each li
  function handleClick(item: QuickLinkType) {
    if (!isEditing) return;
    setSelectedID(item.id);
  }
  // Delete Link
  async function handleDelete(id: string) {
    await deleteLink(id);
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

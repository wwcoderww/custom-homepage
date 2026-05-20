import { deleteLink } from '@/app/actions';
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

  async function handleDelete(item: QuickLinkType) {
    await deleteLink(item);
    router.refresh();
  }

  function handleClick(item: QuickLinkType) {
    if (!isEditing) return;
    setSelectedID(item.id);
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
              onClick={() => handleDelete(item)}
            />
          )}
        </div>
      ))}
    </ul>
  );
}

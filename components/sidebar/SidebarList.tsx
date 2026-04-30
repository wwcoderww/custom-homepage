'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import SidebarLi from './SidebarLi';
import { MdDeleteOutline } from 'react-icons/md';
import useParamMode from '@/hooks/useParamMode';
import { QuickLinkType } from '@/lib/types';
import { deleteLink } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SidebarOverlay from './SidebarOverlay';

type SideBarListProps = {
  initialLinks: QuickLinkType[];
};

export default function SidebarList({ initialLinks }: SideBarListProps) {
  const filteredLinks = useFilteredLinks(initialLinks);
  const { isEditing } = useParamMode();
  const router = useRouter();

  const [selected, setSelected] = useState<QuickLinkType | null>(null);

  async function handleDelete(item: QuickLinkType) {
    await deleteLink(item);
    router.refresh();
  }

  function handleClick(item: QuickLinkType) {
    setSelected(item);
  }

  return (
    <>
      {selected && (
        <SidebarOverlay selected={selected} setSelected={setSelected} />
      )}
      <ul className="flex flex-col gap-3">
        {filteredLinks.map((item) => (
          <div key={item.id} className="flex">
            <SidebarLi item={item} handleClick={() => handleClick(item)} />
            {isEditing && (
              <MdDeleteOutline
                className="w-auto hover:cursor-pointer h-full hover:text-blue-600"
                onClick={() => handleDelete(item)}
              />
            )}
          </div>
        ))}
      </ul>
    </>
  );
}

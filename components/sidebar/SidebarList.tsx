'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import SidebarLi from './SidebarLi';
import { MdDeleteOutline } from 'react-icons/md';
import useParamMode from '@/hooks/useParamMode';
import { QuickLinkType } from '@/lib/types';
import { deleteLink } from '@/app/actions';
import { useRouter } from 'next/navigation';

type SideBarListProps = {
  initialLinks: QuickLinkType[];
};

export default function SidebarList({ initialLinks }: SideBarListProps) {
  const filteredLinks = useFilteredLinks(initialLinks);
  const { isEditing } = useParamMode();
  const router = useRouter();

  async function handleDelete(item: QuickLinkType) {
    deleteLink(item);
    router.refresh();
  }

  return (
    <ul className="flex flex-col gap-4">
      {filteredLinks.map((value) => (
        <div key={value.id} className="flex">
          <SidebarLi label={value.label} />
          {isEditing && (
            <MdDeleteOutline
              className="w-auto hover:cursor-pointer h-full hover:text-blue-600"
              onClick={() => handleDelete(value)}
            />
          )}
        </div>
      ))}
    </ul>
  );
}

'use client';
import { MdDeleteOutline } from 'react-icons/md';
import useDeleteLink from '@/components/links/hooks/forms/useDeleteLink';
import LinkItem from './linkList/list-item';
import { useLinksContext } from './context/links-context';
import Overlay from './linkList/overlay';

export default function LinksList() {
  const { setSelectedID, filteredLinks, isEditing, isViewing, userId } =
    useLinksContext();
  const mutate = useDeleteLink(userId);

  return (
    <div className="@container">
      <ul
        className={`${!isViewing && 'relative z-20'} grid gap-3 @lg:grid-cols-2 @4xl:grid-cols-3`}
      >
        {filteredLinks.map((item) => (
          <div key={item.id} className="flex">
            <LinkItem item={item} handleClick={() => setSelectedID(item.id)} />
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
    </div>
  );
}

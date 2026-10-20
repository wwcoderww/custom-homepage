'use client';
import { deleteLink } from '@/actions/searchPanel-actions';
import { BackEndResponseType, QuickLinkType } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdDeleteOutline } from 'react-icons/md';
import SidebarLi from './LinksLi';
import { useLinksContext } from './context/links-context';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import formErrors from '@/lib/form-errors';

export default function SidebarUl() {
  const { setSelectedID, filteredLinks, paramName, tableName, userId } =
    useLinksContext();
  const queryClient = useQueryClient();
  const params = useSearchParams();

  const isEditing = params.get('mode' + paramName) === 'edit';
  // Handles click for each li
  function handleClick(item: QuickLinkType) {
    if (!isEditing) return;
    setSelectedID(item.id);
  }
  // Delete Link
  const { mutate } = useMutation<BackEndResponseType, Error, string>({
    mutationFn: (id: string) => deleteLink(tableName, id),
    onSuccess: (response) => {
      formErrors(response);
      if (response.success) {
        toast.success('Deleted');
        queryClient.invalidateQueries({
          queryKey: ['links', tableName, userId],
        });
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error('Backend Database Error');
    },
  });

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
              onClick={() => mutate(item.id)}
            />
          )}
        </div>
      ))}
    </ul>
  );
}

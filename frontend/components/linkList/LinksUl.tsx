'use client';
import { deleteLink } from '@/actions/searchPanel-actions';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'sonner';
import SidebarLi from './LinksLi';
import { useLinksContext } from './context/links-context';

export default function SidebarUl() {
  const { setSelectedID, filteredLinks, isEditing, tableName, userId } =
    useLinksContext();
  const queryClient = useQueryClient();

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

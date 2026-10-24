import { deleteLink } from '@/actions/searchPanel-actions';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteLink(userId: string) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<BackEndResponseType, Error, string>({
    mutationFn: (id: string) => deleteLink(id),
    onSuccess: (response) => {
      formErrors(response);
      if (response.success) {
        toast.success('Deleted');
        queryClient.invalidateQueries({
          queryKey: ['links', userId],
        });
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error('Backend Database Error');
    },
  });

  return mutate;
}

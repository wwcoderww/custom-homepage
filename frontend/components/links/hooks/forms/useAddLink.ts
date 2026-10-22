import { addLink, AddLinkPayload } from '@/actions/searchPanel-actions';
import { useUpdateQuery } from '@/components/links/hooks/useUpdateQuery';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useAddLink(
  userId: string,
  paramMode: string,
  reset: () => void
) {
  const queryClient = useQueryClient();
  const updateQuery = useUpdateQuery(paramMode);

  const { mutate } = useMutation<BackEndResponseType, Error, AddLinkPayload>({
    mutationFn: (payload: AddLinkPayload) => addLink(payload),
    onSuccess: (response) => {
      mutationSuccess(response);
    },
    onError: (error) => {
      console.log(error);
      toast.error('Backend connection error');
    },
  });

  function mutationSuccess(response: BackEndResponseType) {
    if (!userId) return { success: false, errors: 'UserId not found' };

    formErrors(response);

    // If success
    if (response && 'success' in response && response.success === true) {
      queryClient.invalidateQueries({
        queryKey: ['links', userId],
      });
      toast.success('Success!');
      updateQuery('view');
      reset();
      return;
    }
  }
  return mutate;
}

import { updateLink, UpdateLinkPayload } from '@/actions/searchPanel-actions';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function usePutLink(
  setSelectedID: (value: string | null) => void,
  userId: string
) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<BackEndResponseType, Error, UpdateLinkPayload>(
    {
      mutationFn: (data: UpdateLinkPayload) => updateLink(data),
      onSuccess: (response) => {
        mutationSuccess(response);
      },
      onError: (err) => {
        console.log(err);
        toast.error('Backend Database Error');
      },
    }
  );

  function mutationSuccess(response: BackEndResponseType) {
    formErrors(response);
    if (response.success) {
      setSelectedID(null);
      toast.success('Updated');
      queryClient.invalidateQueries({
        queryKey: ['links', userId],
      });
    }
  }

  return mutate;
}

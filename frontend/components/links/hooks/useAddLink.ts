import { addLink } from '@/actions/searchPanel-actions';
import { useUpdateQuery } from '@/components/links/hooks/useUpdateQuery';
import { FormReturnType } from '@/components/links/searchPanel/form';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useAddLink(
  tableName: string,
  userId: string,
  paramMode: string,
  reset: () => void
) {
  const queryClient = useQueryClient();
  const updateQuery = useUpdateQuery(paramMode);

  const { mutate } = useMutation<BackEndResponseType, Error, FormData>({
    mutationFn: (formData: FormData) => addLink(tableName, formData),
    onSuccess: (response) => {
      mutationSuccess(response);
    },
    onError: (error) => {
      console.log(error);
      toast.error('Backend connection error');
    },
  });

  function handleSubmit(data: FormReturnType) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('link', data.link);
    formData.append('userId', data.userId);
    mutate(formData);
  }

  function mutationSuccess(response: BackEndResponseType) {
    if (!userId) return { success: false, errors: 'UserId not found' };

    formErrors(response);

    // If success
    if (response && 'success' in response && response.success === true) {
      queryClient.invalidateQueries({
        queryKey: ['links', tableName, userId],
      });
      toast.success('Success!');
      updateQuery('view');
      reset();
      return;
    }
  }
  return handleSubmit;
}

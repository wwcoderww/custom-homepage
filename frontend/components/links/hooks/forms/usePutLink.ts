import { updateLink } from '@/actions/searchPanel-actions';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType, QuickLinkType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { FormDataReturnType } from './usePutForm';

export default function usePutLink(
  setSelectedID: (value: string | null) => void,
  selected: QuickLinkType | null,
  tableName: string,
  userId: string
) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<BackEndResponseType, Error, FormData>({
    mutationFn: (formData: FormData) => updateLink(formData),
    onSuccess: (response) => {
      formErrors(response);
      if (response.success) {
        setSelectedID(null);
        toast.success('Updated');
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

  function handleSubmit(formData: FormDataReturnType) {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('link', formData.link);
    data.append('id', selected?.id || '');
    data.append('tableName', tableName);
    data.append('displayOrder', String(formData.displayOrder));
    mutate(data);
  }
  return handleSubmit;
}

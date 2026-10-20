import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export default function useFormResponse() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  function formResponse(
    response: BackEndResponseType,
    tableName: string,
    userId: string,
    paramMode: string
  ) {
    if (!userId) return { success: false, errors: 'UserId not found' };

    formErrors(response);

    // If success
    if (response && 'success' in response && response.success === true) {
      queryClient.invalidateQueries({
        queryKey: ['links', tableName, userId],
      });
      const param = new URLSearchParams(searchParams.toString());
      param.set(paramMode, 'edit');
      toast.success('Success!');
      router.push(`?${param.toString()}`);
      return;
    }
  }
  return formResponse;
}

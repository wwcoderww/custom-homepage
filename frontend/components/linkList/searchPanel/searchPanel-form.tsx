'use client';

import { addLink } from '@/actions/searchPanel-actions';
import { BackEndResponseType } from '@/lib/types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import useFormResponse from './hooks/useFormResponse';
import InputField from './searchPanel-inputFields';
import { useLinksContext } from '../context/links-context';

export default function SidebarForm() {
  const { tableName, isAdding, paramMode, userId } = useLinksContext();
  const formResponse = useFormResponse();

  const { mutate } = useMutation<BackEndResponseType, Error, FormData>({
    mutationFn: (formData: FormData) => addLink(tableName, formData),
    onSuccess: (response) => {
      formResponse(response, tableName, userId, paramMode);
    },
    onError: (error) => {
      console.log(error);
      toast.error('Backend connection error');
    },
  });

  return (
    <>
      {isAdding && (
        <form action={mutate} id="sidebar-form" className="flex gap-2">
          <div>
            <div>Title:</div>
            <div>Link:</div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <InputField name="name" />
            <InputField name="link" />
            <input
              className="hidden"
              value={userId}
              name="userId"
              type="text"
              readOnly
            />
          </div>
        </form>
      )}
    </>
  );
}

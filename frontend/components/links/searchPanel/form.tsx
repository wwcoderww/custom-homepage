'use client';

import readFormErrors from '@/lib/form-errors';
import { addLink } from '@/actions/searchPanel-actions';
import { BackEndResponseType } from '@/lib/types';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useLinksContext } from '../context/links-context';
import useFormResponse from '../hooks/useFormResponse';
import InputField from './input-fields';
import { useUpdateQuery } from '../hooks/useUpdateQuery';

type FormReturnType = {
  name: string;
  link: string;
  userId: string;
};

export default function SidebarForm() {
  const { tableName, isAdding, paramMode, userId } = useLinksContext();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormReturnType>({
    defaultValues: { name: '', link: '', userId: userId },
  });
  const formResponse = useFormResponse();
  const updateQuery = useUpdateQuery(paramMode);

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

  function onSubmit(data: FormReturnType) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('link', data.link);
    formData.append('userId', data.userId);
    mutate(formData);
  }

  function onError() {
    readFormErrors({ success: false, errors: formErrors });
  }

  return (
    <>
      {isAdding && (
        <>
          <div
            className="fixed inset-0 z-150"
            onClick={() => updateQuery('view')}
          />
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            id="sidebar-form"
            className="z-151 flex gap-2"
          >
            <div>
              <div>Title:</div>
              <div>Link:</div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <InputField
                name="name"
                register={register}
                validation={{ required: 'Name is required' }}
                error={formErrors.name}
              />
              <InputField
                name="link"
                register={register}
                validation={{ required: 'Link is required' }}
                error={formErrors.link}
              />
              <input
                className="hidden"
                {...register('userId')}
                readOnly
                value={userId}
              />
            </div>
          </form>
        </>
      )}
    </>
  );
}

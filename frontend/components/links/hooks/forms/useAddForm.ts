import { useForm } from 'react-hook-form';
import { useLinksContext } from '../../context/links-context';
import useAddLink from './useAddLink';
import readFormErrors from '@/lib/form-errors';

export type FormReturnType = {
  name: string;
  link: string;
  userId: string;
};

export default function useAddForm() {
  const { tableName, isAdding, paramMode, userId } = useLinksContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<FormReturnType>({
    defaultValues: { name: '', link: '', userId: userId },
  });

  const mutate = useAddLink(tableName, userId, paramMode, reset);
  // Success
  function onSubmit(formData: FormReturnType) {
    mutate(formData);
  }
  // Error
  function onError() {
    readFormErrors({ success: false, errors: formErrors });
  }
  return {
    handleSubmit,
    onSubmit,
    onError,
    formErrors,
    register,
    isAdding,
    userId,
  };
}

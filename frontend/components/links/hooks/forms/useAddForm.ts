import { useForm } from 'react-hook-form';
import { useLinksContext } from '../../context/links-context';
import useAddLink from './useAddLink';
import readFormErrors from '@/lib/form-errors';
import { AddLinkPayload } from '@/actions/searchPanel-actions';

export default function useAddForm() {
  const { isAdding, paramMode, userId, group } = useLinksContext();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors: formErrors },
  } = useForm<AddLinkPayload>({
    defaultValues: { name: '', link: '', userId: userId, group: group },
  });

  const mutate = useAddLink(userId, paramMode, reset);
  // Success
  function onSuccess(formData: AddLinkPayload) {
    mutate(formData);
  }
  // Error
  function onError() {
    readFormErrors({ success: false, errors: formErrors });
  }
  return {
    handleSubmit,
    onSuccess,
    onError,
    formErrors,
    register,
    isAdding,
    userId,
    clearErrors,
  };
}

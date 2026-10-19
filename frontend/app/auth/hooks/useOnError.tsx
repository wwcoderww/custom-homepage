import { FieldErrors } from 'react-hook-form';
import { toast } from 'sonner';

export default function onError() {
  return (formErrors: FieldErrors) => {
    Object.values(formErrors).forEach((formError) => {
      if (
        formError &&
        'message' in formError &&
        typeof formError.message === 'string'
      ) {
        console.log('Validation Error:', formError.message);
        toast.error(formError.message);
      }
    });
  };
}

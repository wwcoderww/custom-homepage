import { toast } from 'sonner';
import { BackEndResponseType } from './types';

export default function formErrors(response: BackEndResponseType) {
  if (response && 'success' in response && response.success === false) {
    console.log(response);
    if (response.errors) {
      if (Array.isArray(response.errors)) {
        response.errors.forEach((err) => {
          toast.error(err.message);
        });
      }
    }
    return response;
  }
  if (response && 'success' in response && response.success === false) {
    // If unknown error
    console.log(response);
    toast.error('Unknown error');
    return response;
  }
}

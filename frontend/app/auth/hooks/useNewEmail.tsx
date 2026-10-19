import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';

export default function useNewEmail() {
  const router = useRouter();
  async function newEmail(
    formData: FieldValues,
    setError: UseFormSetError<FieldValues>
  ) {
    const { email, password } = formData;
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name: email,
    });
    console.log(data, error);
    if (error) {
      console.log(error);
      if (error.message?.startsWith('User')) {
        toast.error('Email taken');
        setError('email', { type: 'email', message: 'Email taken' });
      }
      return;
    }
    if (data) {
      toast.success('Successfully created account');
      router.push('/');
    }
  }
  return newEmail;
}

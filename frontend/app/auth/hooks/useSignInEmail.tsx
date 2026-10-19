import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export default function useSignInEmail() {
  const router = useRouter();
  async function signInEmail(formData: FieldValues) {
    const { email, password } = formData;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    console.log(data, error);
    if (error) {
      console.log(error);
      if (error.message?.includes('Invalid email or password')) {
        toast.error('Wrong email or password');
      }
      return;
    }
    if (data) {
      toast.success('Logged in!');
      router.push('/');
    }
  }
  return signInEmail;
}

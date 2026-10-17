'use client';
import ButtonItem from '@/components/ButtonItem';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import AuthFormInputs from './_components/auth-form-inputs';
import { authClient } from '@/lib/auth-client';

export default function Page() {
  const router = useRouter();
  const [isNew, setIsNew] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors: formErrors },
  } = useForm();

  async function onSuccess(formData: FieldValues) {
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

  function onError(formErrors: FieldErrors) {
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
  }

  return (
    <div
      className="fixed inset-0 z-110 flex items-center justify-center bg-black/20"
      onClick={() => router.push('/')}
    >
      <div
        className="absolute flex min-w-1/2 items-center justify-center rounded-3xl border-6 border-slate-900 bg-blue-900 py-20"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="grid grid-cols-[auto_1fr] grid-rows-2 gap-4 text-center text-3xl"
          onSubmit={handleSubmit(onSuccess, onError)}
        >
          <AuthFormInputs
            register={register}
            isNew={isNew}
            formErrors={formErrors}
            getValues={getValues}
          />
          <ButtonItem
            label={isNew ? 'create' : 'login'}
            customClass="col-span-2 mx-auto rounded-3xl px-10 py-2 font-medium !text-3xl mt-6 border-3 ease-in-out duration-300 hover:-translate-y-1 transform"
            type="submit"
          />
          <span
            className="col-span-2 mx-auto transform pt-2 text-xl underline duration-300 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer"
            onClick={() => setIsNew(!isNew)}
          >
            {isNew ? 'sign in instead' : 'create new account'}
          </span>
        </form>
      </div>
    </div>
  );
}

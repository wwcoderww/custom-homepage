'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import useNewEmail from '../hooks/useNewEmail';
import useSignInEmail from '../hooks/useSignInEmail';
import useOnError from '../hooks/useOnError';
import AuthFormInputs from './auth-form-inputs';
import ButtonItem from '@/components/button-item';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors: formErrors },
  } = useForm();
  const [isNew, setIsNew] = useState<boolean>(false);

  const newEmail = useNewEmail();
  const signInEmail = useSignInEmail();
  const onError = useOnError();

  async function onSuccess(formData: FieldValues) {
    if (isNew) {
      await newEmail(formData, setError);
    } else {
      await signInEmail(formData);
    }
  }

  return (
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
  );
}

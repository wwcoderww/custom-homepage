'use client';

import { useEffect } from 'react';
import useAddForm from '../hooks/forms/useAddForm';
import InputField from './input-fields';

export default function SidebarForm() {
  const {
    handleSubmit,
    onSuccess,
    onError,
    formErrors,
    clearErrors,
    register,
    isAdding,
    userId,
  } = useAddForm();

  useEffect(() => {
    return () => {
      if (isAdding) clearErrors();
    };
  }, [isAdding, clearErrors]);

  return (
    <>
      {isAdding && (
        <>
          <form
            onSubmit={handleSubmit(onSuccess, onError)}
            id="sidebar-form"
            className="flex flex-col gap-2"
          >
            <div className="flex">
              <label htmlFor="name" className="min-w-15">
                Name:
              </label>
              <InputField
                name="name"
                register={register}
                validation={{ required: 'Name is required' }}
                error={formErrors.name}
                customClass="w-full"
              />
            </div>
            <div className="flex">
              <label htmlFor="link" className="min-w-15">
                Link:
              </label>
              <InputField
                name="link"
                register={register}
                validation={{ required: 'Link is required' }}
                error={formErrors.link}
                customClass="w-full"
              />
            </div>
            <div className="flex">
              <label htmlFor="group" className="min-w-15 flex-1">
                Group:
              </label>
              <select id="group" className="text-end" {...register('group')}>
                <option value="0">Sidebar</option>
                {Array.from({ length: 4 }, (_, i) => i + 1).map((nun) => (
                  <option key={nun} value={nun} className="w-full text-center">
                    Tab {nun}
                  </option>
                ))}
              </select>
            </div>
            <input
              className="hidden"
              {...register('userId')}
              readOnly
              value={userId}
            />
          </form>
        </>
      )}
    </>
  );
}

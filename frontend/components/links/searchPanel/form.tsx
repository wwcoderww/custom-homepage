'use client';

import useAddForm from '../hooks/useAddForm';
import InputField from './input-fields';

export default function SidebarForm() {
  const { handleSubmit, onSubmit, onError, formErrors, register, isAdding } =
    useAddForm();

  return (
    <>
      {isAdding && (
        <>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            id="sidebar-form"
            className="flex gap-2"
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

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import InputField from './InputField';
import { useSearchPanelContext } from './context/SearchPanelContext';

export default function SidebarForm() {
  // To make a new param
  const router = useRouter();
  const searchParams = useSearchParams();
  // Variables
  const { formFunc, isAdding, paramMode } = useSearchPanelContext();
  // Submit Form Function
  async function handleForm(formData: FormData) {
    await formFunc(formData);

    const param = new URLSearchParams(searchParams.toString());
    param.set(paramMode, 'edit');
    router.push(`?${param.toString()}`);
  }
  // Return UI
  return (
    <>
      {isAdding && (
        <form action={handleForm} id="sidebar-form" className="flex gap-2">
          <div>
            <div>Title:</div>
            <div>Link:</div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <InputField name="label" />
            <InputField name="link" />
          </div>
        </form>
      )}
    </>
  );
}

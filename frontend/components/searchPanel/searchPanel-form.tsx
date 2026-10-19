'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import InputField from './searchPanel-inputFields';
import { useSearchPanelContext } from './context/searchPanel-context';
import { addLink } from '@/actions/searchPanel-actions';

export default function SidebarForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { tableName, isAdding, paramMode, userId } = useSearchPanelContext();
  // Submit Form Function
  async function handleForm(formData: FormData) {
    const response = await addLink(tableName, formData);
    if (response) return console.log(response);
    const param = new URLSearchParams(searchParams.toString());
    param.set(paramMode, 'edit');
    router.push(`?${param.toString()}`);
  }

  return (
    <>
      {isAdding && (
        <form action={handleForm} id="sidebar-form" className="flex gap-2">
          <div>
            <div>Title:</div>
            <div>Link:</div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <InputField name="name" />
            <InputField name="link" />
            <input
              className="hidden"
              value={userId}
              name="userId"
              type="text"
              readOnly
            />
          </div>
        </form>
      )}
    </>
  );
}

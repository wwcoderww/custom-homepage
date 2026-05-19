'use client';

import useParamMode from '@/hooks/useParamMode';
import { useRouter, useSearchParams } from 'next/navigation';
import InputField from './InputField';

type SidebarFormProps = {
  formFunc: (formData: FormData) => Promise<void>;
};

export default function SidebarForm({ formFunc }: SidebarFormProps) {
  const { isAdding } = useParamMode();
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleForm(formData: FormData) {
    await formFunc(formData);

    const param = new URLSearchParams(searchParams.toString());
    param.set('mode', 'edit');
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
            <InputField name="label" />
            <InputField name="link" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

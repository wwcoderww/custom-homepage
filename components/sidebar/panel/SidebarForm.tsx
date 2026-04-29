'use client';

import { addLink } from '@/app/actions';
import InputField from '@/components/InputField';
import useParamMode from '@/hooks/useParamMode';

export default function SidebarForm() {
  const { isAdding } = useParamMode();

  return (
    <>
      {isAdding && (
        <form action={addLink} id="sidebar-form" className="flex gap-2 pt-2">
          <div>
            <div>Title:</div>
            <div>Link:</div>
          </div>
          <div className="flex-1 flex flex-col">
            <InputField name="label" className="" />
            <InputField name="link" />
          </div>
        </form>
      )}
    </>
  );
}

'use client';

import { addLink } from '@/app/actions';
import useParamMode from '@/hooks/useParamMode';

export default function SidebarForm() {
  const { isAdding } = useParamMode();

  return (
    <>
      {isAdding && (
        <form action={addLink}>
          <input type="text" name="label" />
          <input type="text" name="link" />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

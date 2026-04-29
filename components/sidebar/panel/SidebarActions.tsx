'use client';

import useParamMode from '@/hooks/useParamMode';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { TiCancel } from 'react-icons/ti';

const buttonClass =
  'w-auto hover:cursor-pointer h-full text-blue-700 hover:text-blue-500';

export default function SidebarActions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isEditing, isAdding } = useParamMode();
  const ToggleButton = isEditing ? FaCheck : MdEdit;

  function changeParam(mode: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mode', isEditing && mode === 'edit' ? 'view' : mode);
    router.push(`?${params.toString()}`);
  }

  return (
    <>
      {isEditing && !isAdding && (
        <FaPlus className={buttonClass} onClick={() => changeParam('add')} />
      )}
      {isAdding && (
        <>
          <TiCancel
            className={buttonClass}
            onClick={() => changeParam('edit')}
          />
          <button type="submit" form="sidebar-form">
            <FaCheck className={buttonClass} />
          </button>
        </>
      )}
      {!isAdding && (
        <ToggleButton
          className={buttonClass}
          onClick={() => changeParam('edit')}
        />
      )}
    </>
  );
}

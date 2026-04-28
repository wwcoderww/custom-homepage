'use client';

import useParamMode from '@/hooks/useParamMode';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

const buttonClass = 'h-5/6 w-auto hover:cursor-pointer hover:h-full';

export default function SidebarActions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isEditing } = useParamMode();
  const ToggleButton = isEditing ? FaCheck : MdEdit;

  function changeParam(mode: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mode', isEditing && mode === 'edit' ? 'view' : mode);
    router.push(`?${params.toString()}`);
  }

  return (
    <>
      {isEditing && (
        <FaPlus className={buttonClass} onClick={() => changeParam('add')} />
      )}
      <ToggleButton
        className={buttonClass}
        onClick={() => changeParam('edit')}
      />
    </>
  );
}

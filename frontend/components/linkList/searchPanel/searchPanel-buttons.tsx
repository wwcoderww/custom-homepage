'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FaCheck, FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { TiCancel } from 'react-icons/ti';
import { useLinksContext } from '../context/links-context';

const buttonClass =
  'w-auto hover:cursor-pointer h-full text-blue-700 hover:text-blue-500 ml-1';

export default function SearchPanelActions() {
  // To make a new param
  const router = useRouter();
  const searchParams = useSearchParams();
  // Variables
  const { paramMode, isEditing, isAdding } = useLinksContext();
  // Whether to display check mark or edit button
  // Handle button clicks
  function changeParam(mode: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramMode, isEditing && mode === 'edit' ? 'view' : mode);
    router.push(`?${params.toString()}`);
  }

  return (
    <>
      {isEditing && (
        <>
          <FaPlus className={buttonClass} onClick={() => changeParam('add')} />
          <FaCheck
            className={buttonClass}
            onClick={() => changeParam('view')}
          />
        </>
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
      {!isEditing && !isAdding && (
        <MdEdit className={buttonClass} onClick={() => changeParam('edit')} />
      )}
    </>
  );
}

'use client';

import { FaCheck, FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { TiCancel } from 'react-icons/ti';
import { useLinksContext } from '../context/links-context';
import { useUpdateQuery } from '../hooks/useUpdateQuery';

const buttonClass =
  'w-auto hover:cursor-pointer h-full text-blue-700 hover:text-blue-500 ml-1';

export default function SearchPanelActions() {
  const { paramMode, isEditing, isAdding } = useLinksContext();
  const updateQuery = useUpdateQuery(paramMode);

  return (
    <>
      {isEditing && (
        <>
          <FaPlus className={buttonClass} onClick={() => updateQuery('add')} />
          <FaCheck
            className={buttonClass}
            onClick={() => updateQuery('view')}
          />
        </>
      )}
      {isAdding && (
        <>
          <TiCancel
            className={buttonClass}
            onClick={() => updateQuery('edit')}
          />
          <button type="submit" form="sidebar-form">
            <FaCheck className={buttonClass} />
          </button>
        </>
      )}
      {!isEditing && !isAdding && (
        <MdEdit className={buttonClass} onClick={() => updateQuery('edit')} />
      )}
    </>
  );
}

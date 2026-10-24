'use client';

import { FaCheck, FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { TiCancel } from 'react-icons/ti';
import { useLinksContext } from '../context/links-context';
import { useUpdateQuery } from '../hooks/useUpdateQuery';

const buttonClass =
  'w-auto hover:cursor-pointer h-full text-text hover:text-textHover ml-1';

export default function SearchPanelActions() {
  const { paramMode, isEditing, isAdding } = useLinksContext();
  const updateQuery = useUpdateQuery(paramMode);

  return (
    <>
      {isEditing && (
        <>
          <button
            onClick={() => updateQuery('add')}
            aria-label="Cancel editing"
          >
            <FaPlus className={buttonClass} />
          </button>
          <button
            onClick={() => updateQuery('view')}
            aria-label="Cancel editing form"
          >
            <FaCheck className={buttonClass} />
          </button>
        </>
      )}
      {isAdding && (
        <>
          <button
            onClick={() => updateQuery('edit')}
            aria-label="Cancel adding form"
          >
            <TiCancel className={buttonClass} />
          </button>
          <button type="submit" form="sidebar-form" aria-label="Submit form">
            <FaCheck className={buttonClass} />
          </button>
        </>
      )}
      {!isEditing && !isAdding && (
        <button
          aria-label="Edit links"
          className={buttonClass}
          onClick={() => updateQuery('edit')}
        >
          <MdEdit className="h-full w-full" aria-label="Edit links" />
        </button>
      )}
    </>
  );
}

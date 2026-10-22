'use client';
import { useLinksContext } from './context/links-context';
import { useUpdateQuery } from './hooks/useUpdateQuery';

export default function Overlay() {
  const { paramMode, isAdding, isEditing } = useLinksContext();
  const updateParamMode = useUpdateQuery(paramMode);

  function handleClickOutside() {
    updateParamMode('view');
  }

  if (!isAdding && !isEditing) return null;

  return (
    <div className="fixed inset-0 z-10" onClick={handleClickOutside}></div>
  );
}

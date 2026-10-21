'use client';
import { useLinksContext } from './context/links-context';
import { useUpdateQuery } from './hooks/useUpdateQuery';

export default function Overlay() {
  const { isAdding, isEditing, paramMode } = useLinksContext();
  const updateQuery = useUpdateQuery(paramMode);

  if (!isAdding && !isEditing) return <div />;

  return (
    <div className="fixed inset-0 z-10" onClick={() => updateQuery('view')} />
  );
}

'use client';
import { useLinksContext } from './context/links-context';
import { useUpdateQuery } from './hooks/useUpdateQuery';

export default function Overlay() {
  const { isViewing, paramMode } = useLinksContext();
  const updateParamMode = useUpdateQuery(paramMode);

  function handleClickOutside() {
    console.log('click');
    updateParamMode('view');
  }

  return (
    <div
      className={`fixed inset-0 z-10 ${isViewing && 'hidden'}`}
      onClick={handleClickOutside}
    ></div>
  );
}

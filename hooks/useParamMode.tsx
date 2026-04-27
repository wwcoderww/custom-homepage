import { useSearchParams } from 'next/navigation';

export default function useParamMode() {
  const params = useSearchParams();
  const isEditing = params.get('mode') !== 'view';
  const isAdding = params.get('mode') === 'add';

  return { isEditing, isAdding };
}

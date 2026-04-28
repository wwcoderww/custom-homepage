import { useSearchParams } from 'next/navigation';

export default function useParamMode() {
  const params = useSearchParams();
  const mode = params.get('mode') || 'view';
  const isEditing = params.get('mode') !== 'view';
  const isAdding = params.get('mode') === 'add';

  return { isEditing, isAdding, mode };
}

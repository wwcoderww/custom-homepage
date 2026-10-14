import { useSearchParams } from 'next/navigation';

export default function useParamMode(name: string) {
  const params = useSearchParams();
  const mode = params.get(name) || 'view';
  const isEditing = params.get(name) === 'add' || params.get(name) === 'edit';
  const isAdding = params.get(name) === 'add';

  return { isEditing, isAdding, mode };
}

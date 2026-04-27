import { useSearchParams } from 'next/navigation';

export default function useIsEditing() {
  const params = useSearchParams();
  const mode = params.get('mode') || 'view';
  return { mode, isEditing: mode === 'edit' };
}

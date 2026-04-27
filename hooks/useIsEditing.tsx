import { useSearchParams } from 'next/navigation';

export default function useIsEditing() {
  const params = useSearchParams();
  const isEditing = params.get('mode') === 'edit';
  return isEditing;
}

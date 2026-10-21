import { useRouter, useSearchParams } from 'next/navigation';

export default function useUpdateQuery(name: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  function updateQuery(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) params.set(name, value);
    else params.delete(name);
    router.push(`?${params.toString()}`);
  }
  return updateQuery;
}

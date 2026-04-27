import { useRouter, useSearchParams } from 'next/navigation';

export function useSearchQuery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return function updateQuery(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) params.set('q', value);
    else params.delete('q');

    router.push(`?${params.toString()}`);
  };
}

import { useRouter, useSearchParams } from 'next/navigation';

export function useSearchQuery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return function updateQuery(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) params.set('mlinks', value);
    else params.delete('mlinks');

    router.push(`?${params.toString()}`);
  };
}

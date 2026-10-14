import { useRouter, useSearchParams } from 'next/navigation';

export function useSearchQuery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return function updateQuery(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) params.set('sblinks', value);
    else params.delete('sblinks');

    router.push(`?${params.toString()}`);
  };
}

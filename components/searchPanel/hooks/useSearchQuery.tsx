import { useRouter, useSearchParams } from 'next/navigation';

export function useSearchQuery(paramName: string) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return function updateQuery(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) params.set(paramName, value);
    else params.delete(paramName);

    router.push(`?${params.toString()}`);
  };
}

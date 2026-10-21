import { useRouter, useSearchParams } from 'next/navigation';

export function useUpdateQuery(paramName: string) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return function updateQuery(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value[0]) params.set(paramName, value);
    else params.delete(paramName);

    router.push(`?${params.toString()}`);
  };
}

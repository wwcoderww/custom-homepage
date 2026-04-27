'use client';
import { FaSearch } from 'react-icons/fa';
import InputField from '../InputField';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex gap-1.5 flex-1">
      <FaSearch className="h-full w-auto" />
      <InputField onChange={handleChange} />
    </div>
  );
}

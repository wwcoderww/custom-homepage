'use client';
import { FaSearch } from 'react-icons/fa';
import InputField from '../InputField';
import { useSearchQuery } from '@/hooks/useSearchQuery';

export default function Search() {
  const updateQuery = useSearchQuery();

  return (
    <div className="flex gap-1.5 flex-1">
      <FaSearch className="h-full w-auto" />
      <InputField onChange={updateQuery} className="flex-1" />
    </div>
  );
}

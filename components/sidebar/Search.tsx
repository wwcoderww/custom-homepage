'use client';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SearchBar from '../SearchBar';

export default function Search() {
  const updateQuery = useSearchQuery();

  return <SearchBar onChange={updateQuery} />;
}

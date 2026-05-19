'use client';
import SearchBar from './SearchBar';
import { useSearchQuery } from './hooks/useSearchQuery';

type SearchProps = {
  paramName: string;
};

export default function Search({ paramName }: SearchProps) {
  const updateQuery = useSearchQuery(paramName);

  return <SearchBar onChange={updateQuery} />;
}

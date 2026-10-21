'use client';
import SearchBar from './search-bar';
import { useSearchQuery } from '../hooks/useSearchQuery';
import { useLinksContext } from '../context/links-context';

export default function Search() {
  const { paramName } = useLinksContext();
  const updateQuery = useSearchQuery(paramName);

  return <SearchBar onChange={updateQuery} />;
}

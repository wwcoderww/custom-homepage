'use client';
import SearchBar from './searchPanel-searchBar';
import { useSearchQuery } from './hooks/useSearchQuery';
import { useLinksContext } from '../context/links-context';

export default function Search() {
  const { paramName } = useLinksContext();
  const updateQuery = useSearchQuery(paramName);

  return <SearchBar onChange={updateQuery} />;
}

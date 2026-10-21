'use client';
import SearchBar from './search-bar';
import { useLinksContext } from '../context/links-context';
import { useUpdateQuery } from '../hooks/useUpdateQuery';

export default function Search() {
  const { paramName } = useLinksContext();
  const updateQuery = useUpdateQuery(paramName);

  return <SearchBar onChange={updateQuery} />;
}

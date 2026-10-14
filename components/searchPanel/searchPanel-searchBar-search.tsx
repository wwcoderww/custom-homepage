'use client';
import SearchBar from './searchPanel-searchBar';
import { useSearchPanelContext } from './context/searchPanel-context';
import { useSearchQuery } from './hooks/useSearchQuery';

export default function Search() {
  const { paramName } = useSearchPanelContext();
  const updateQuery = useSearchQuery(paramName);

  return <SearchBar onChange={updateQuery} />;
}

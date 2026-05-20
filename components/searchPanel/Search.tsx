'use client';
import SearchBar from './SearchBar';
import { useSearchPanelContext } from './context/SearchPanelContext';
import { useSearchQuery } from './hooks/useSearchQuery';

export default function Search() {
  const { paramName } = useSearchPanelContext();
  const updateQuery = useSearchQuery(paramName);

  return <SearchBar onChange={updateQuery} />;
}

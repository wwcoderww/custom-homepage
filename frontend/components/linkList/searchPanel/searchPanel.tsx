'use client';
import SearchPanelActions from './searchPanel-actions';
import SidebarForm from './searchPanel-form';
import Search from './searchPanel-searchBar-search';

export default function SearchPanel() {
  return (
    <div className="my-4 flex flex-col gap-2">
      <div className="flex h-6">
        <Search />
        <SearchPanelActions />
      </div>
      <SidebarForm />
    </div>
  );
}

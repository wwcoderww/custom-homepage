'use client';

import SearchPanelActions from './searchPanel/buttons';
import SidebarForm from './searchPanel/form';
import Search from './searchPanel/search';

export default function SearchPanel() {
  return (
    <div className="my-4 flex flex-col gap-2">
      <div className="z-151 flex h-6">
        <Search />
        <SearchPanelActions />
      </div>
      <SidebarForm />
    </div>
  );
}

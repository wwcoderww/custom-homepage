'use client';

import { useLinksContext } from './context/links-context';
import SearchPanelActions from './searchPanel/buttons';
import SidebarForm from './searchPanel/form';
import Search from './searchPanel/search';

export default function SearchPanel() {
  const { isViewing } = useLinksContext();

  return (
    <div
      className={`${!isViewing && 'relative z-20'} my-4 flex flex-col gap-2`}
    >
      <div className="flex h-6">
        <Search />
        <SearchPanelActions />
      </div>
      <SidebarForm />
    </div>
  );
}

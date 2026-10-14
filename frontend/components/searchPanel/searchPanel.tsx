// This compond component adds what is typed in search to params and also has form that returns a title/link entered by user
'use client';
import Search from './searchPanel-searchBar-search';
import SidebarActions from './searchPanel-actions';
import SidebarForm from './searchPanel-form';
import { SearchPanelContext } from './context/searchPanel-context';

type SidebarPanelProps = {
  paramName: string;
  tableName: string;
};

export default function SidebarPanel({
  paramName,
  tableName,
}: SidebarPanelProps) {
  // const paramName = 'mlinks';

  return (
    <SearchPanelContext.Provider value={{ paramName, tableName }}>
      <div className="my-4 flex flex-col gap-2">
        <div className="flex h-6">
          <Search />
          <SidebarActions />
        </div>
        <SidebarForm />
      </div>
    </SearchPanelContext.Provider>
  );
}

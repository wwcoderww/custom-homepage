import { LinksProvider } from '@/components/linkList/context/links-context';
import LinksList from '@/components/linkList/LinksList';
import SearchPanel from '@/components/linkList/searchPanel/searchPanel';

export default async function Sidebar() {
  return (
    <div className="hidden h-screen flex-col gap-2 overflow-y-scroll bg-slate-900 px-2 sm:flex">
      <LinksProvider paramName="sblinks" tableName="sidebarLinks">
        <SearchPanel />
        <LinksList />
      </LinksProvider>
    </div>
  );
}

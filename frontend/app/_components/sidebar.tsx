import LinksList from '@/components/linkList/LinksList';
import SearchPanel from '@/components/searchPanel/searchPanel';

export default async function Sidebar() {
  return (
    <div className="hidden flex-col gap-2 overflow-y-scroll bg-slate-900 px-2 sm:flex">
      <SearchPanel paramName="sblinks" tableName="sidebarLinks" />
      <LinksList tableName="sidebarLinks" paramName="sblinks" />
    </div>
  );
}

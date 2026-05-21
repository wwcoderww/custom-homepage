import SidebarList from '@/components/linkList/SidebarList';
import SidebarPanel from '@/components/searchPanel/SidebarPanel';

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <SidebarPanel paramName="sblinks" tableName="sidebar_links" />
      <SidebarList
        tableName="sidebar_links"
        functionName="reorder_links"
        paramName="sblinks"
      />
    </main>
  );
}

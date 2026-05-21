import { loadLinks } from '@/actions/sidebarActions';
import { SidebarProvider } from '@/context/SidebarContext';
import SidebarList from '@/components/linkList/SidebarList';
import SidebarPanel from '@/components/searchPanel/SidebarPanel';

export default async function Sidebar() {
  const sideBarLinks = await loadLinks('sidebar_links');

  return (
    <SidebarProvider paramName="modesblinks" initialLinks={sideBarLinks}>
      <div className="hidden flex-col gap-2 overflow-y-scroll bg-slate-900 px-2 sm:flex">
        <SidebarPanel paramName="sblinks" tableName="sidebar_links" />
        <SidebarList
          tableName="sidebar_links"
          functionName="reorder_links"
          paramName="sblinks"
        />
      </div>
    </SidebarProvider>
  );
}

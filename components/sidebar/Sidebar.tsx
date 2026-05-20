import { addLink, loadLinks } from '@/actions/sidebarActions';
import SidebarList from './SidebarList';
import SidebarPanel from '../searchPanel/SidebarPanel';
import { SidebarProvider } from '@/context/SidebarContext';

export default async function Sidebar() {
  const sideBarLinks = await loadLinks();

  return (
    <SidebarProvider paramName="modesblinks" initialLinks={sideBarLinks}>
      <div className="hidden flex-col gap-2 overflow-y-scroll bg-slate-900 px-2 sm:flex">
        <SidebarPanel formFunc={addLink} paramName="sblinks" />
        <SidebarList />
      </div>
    </SidebarProvider>
  );
}

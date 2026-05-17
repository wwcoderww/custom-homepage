import { loadLinks } from '@/app/actions';
import SidebarList from './SidebarList';
import SidebarPanel from './panel/SidebarPanel';

export default async function Sidebar() {
  const sideBarLinks = await loadLinks();

  return (
    <div className="hidden flex-col gap-2 overflow-y-scroll bg-slate-900 px-2 sm:flex">
      <SidebarPanel />
      <SidebarList initialLinks={sideBarLinks} />
    </div>
  );
}

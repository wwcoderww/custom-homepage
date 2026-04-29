import { loadLinks } from '@/app/actions';
import SidebarList from './SidebarList';
import SidebarPanel from './panel/SidebarPanel';

export default async function Sidebar() {
  const links = await loadLinks();

  return (
    <div className="hidden sm:flex flex-col overflow-y-scroll px-2 gap-2 bg-slate-900">
      <SidebarPanel />
      <SidebarList initialLinks={links} />
    </div>
  );
}

import SidebarList from './SidebarList';
import SidebarPanel from './SidebarPanel';

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col border-2 overflow-y-scroll h-screen">
      <SidebarPanel />
      <SidebarList />
    </div>
  );
}

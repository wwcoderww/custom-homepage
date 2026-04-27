import SidebarList from './SidebarList';
import SidebarPanel from './panel/SidebarPanel';

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col border-2 overflow-y-scroll h-screen px-2 py-1">
      <SidebarPanel />
      <SidebarList />
    </div>
  );
}

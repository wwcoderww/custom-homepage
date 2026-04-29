import SidebarList from './SidebarList';
import SidebarPanel from './panel/SidebarPanel';

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col border-blue-600 overflow-y-scroll px-2 py-1 gap-2 border-4 border-t-0 border-b-0 border-l-0">
      <SidebarPanel />
      <SidebarList />
    </div>
  );
}

import Search from '../Search';
import SidebarActions from './SidebarActions';

export default function SidebarPanel() {
  return (
    <div className="flex h-6">
      <Search />
      <SidebarActions />
    </div>
  );
}

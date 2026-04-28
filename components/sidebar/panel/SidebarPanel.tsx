import Search from '../Search';
import SidebarActions from './SidebarActions';
import SidebarForm from './SidebarForm';

export default function SidebarPanel() {
  return (
    <div>
      <div className="flex h-6">
        <Search />
        <SidebarActions />
      </div>
      <SidebarForm />
    </div>
  );
}

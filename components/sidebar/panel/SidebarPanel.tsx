import Search from '../Search';
import SidebarActions from './SidebarActions';
import SidebarForm from './SidebarForm';

export default function SidebarPanel() {
  return (
    <div className="my-4 flex flex-col gap-2">
      <div className="flex h-6">
        <Search />
        <SidebarActions />
      </div>
      <SidebarForm />
    </div>
  );
}

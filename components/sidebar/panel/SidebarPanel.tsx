import Search from '../Search';
import SidebarActions from './SidebarActions';
import SidebarForm from './SidebarForm';

export default function SidebarPanel() {
  return (
    <div className="my-4 gap-2 flex flex-col">
      <div className="flex h-6 ">
        <Search />
        <SidebarActions />
      </div>
      <SidebarForm />
    </div>
  );
}

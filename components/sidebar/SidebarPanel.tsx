import Search from './Search';
import { MdEdit } from 'react-icons/md';

export default function SidebarPanel() {
  return (
    <div className="flex h-6">
      <Search />
      <MdEdit className="h-full w-auto" />
    </div>
  );
}

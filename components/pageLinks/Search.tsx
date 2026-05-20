import { addLink } from '@/actions/sidebarActions';
import SidebarPanel from '../searchPanel/SidebarPanel';

export default function Search() {
  return <SidebarPanel paramName="mlinks" formFunc={addLink} />;
}

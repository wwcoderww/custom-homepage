import { addLink } from '@/actions/actions';
import SidebarPanel from '../searchPanel/SidebarPanel';

export default function Search() {
  return <SidebarPanel paramName="mlinks" formFunc={addLink} />;
}

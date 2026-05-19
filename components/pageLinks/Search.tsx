import { addLink } from '@/app/actions';
import SidebarPanel from '../searchPanel/SidebarPanel';

export default function Search() {
  return <SidebarPanel paramName="mlinks" formFunc={addLink} />;
}

import { loadLinks } from '@/actions/sidebarActions';
import SidebarOverlay from './SidebarOverlay';
import SidebarUl from './SidebarUl';
import { LinkListProvider } from './context/LinkListContext';

type SideBarListProps = {
  tableName: string;
  paramName: string;
  functionName: string;
};

export default async function SidebarList({
  tableName,
  paramName,
  functionName,
}: SideBarListProps) {
  const unfilteredLinks = await loadLinks(tableName);
  return (
    <LinkListProvider
      unFilteredLinks={unfilteredLinks}
      paramName={paramName}
      functionName={functionName}
      tableName={tableName}
    >
      <SidebarOverlay />
      <SidebarUl />
    </LinkListProvider>
  );
}

import SidebarOverlay from './LinksOverlay';
import SidebarUl from './LinksUl';
import { LinkListProvider } from './context/LinkListContext';

type LinksListProps = {
  tableName: string;
  paramName: string;
};

export default async function LinksList({
  tableName,
  paramName,
}: LinksListProps) {
  return (
    <LinkListProvider paramName={paramName} tableName={tableName}>
      <SidebarOverlay />
      <SidebarUl />
    </LinkListProvider>
  );
}

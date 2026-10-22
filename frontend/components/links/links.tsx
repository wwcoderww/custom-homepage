import { LinksProvider } from './context/links-context';
import SearchPanel from './search-panel';
import LinksList from './links-list';
import Overlay from './overlay';

type LinksProps = {
  paramName: string;
  group: number;
};

export default function Links({ paramName, group }: LinksProps) {
  return (
    <LinksProvider paramName={paramName} group={group}>
      <Overlay />
      <SearchPanel />
      <LinksList />
    </LinksProvider>
  );
}

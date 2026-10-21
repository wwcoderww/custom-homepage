import { LinksProvider } from './context/links-context';
import SearchPanel from './search-panel';
import LinksList from './links-list';
import Overlay from './overlay';

type LinksProps = {
  paramName: string;
  tableName: string;
};

export default function Links({ paramName, tableName }: LinksProps) {
  return (
    <LinksProvider paramName={paramName} tableName={tableName}>
      <Overlay />
      <SearchPanel />
      <LinksList />
    </LinksProvider>
  );
}

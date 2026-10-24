import { Suspense } from 'react';
import { LinksProvider } from './context/links-context';
import LinksList from './links-list';
import Overlay from './overlay';
import SearchPanel from './search-panel';
import LoadingSpinner from '../loading-spinner';

type LinksProps = {
  paramName: string;
  group: number;
};

function LinksContext({ paramName, group }: LinksProps) {
  return (
    <LinksProvider paramName={paramName} group={group}>
      <Overlay />
      <SearchPanel />
      <LinksList />
    </LinksProvider>
  );
}

export default function Links({ paramName, group }: LinksProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LinksContext paramName={paramName} group={group} />
    </Suspense>
  );
}

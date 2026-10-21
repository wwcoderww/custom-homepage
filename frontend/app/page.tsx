import { LinksProvider } from '@/components/links/context/links-context';
import LinksList from '@/components/links/links-list';
import SidebarPanel from '@/components/links/searchPanel';

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <LinksProvider paramName="mlinks" tableName="mainLinks">
        <SidebarPanel />
        <LinksList />
      </LinksProvider>
    </main>
  );
}

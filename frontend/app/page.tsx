import { LinksProvider } from '@/components/linkList/context/links-context';
import LinksList from '@/components/linkList/LinksList';
import SidebarPanel from '@/components/linkList/searchPanel/searchPanel';

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

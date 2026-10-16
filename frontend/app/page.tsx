import LinksList from '@/components/linkList/LinksList';
import SidebarPanel from '@/components/searchPanel/searchPanel';

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <SidebarPanel paramName="mlinks" tableName="mainLinks" />
      <LinksList tableName="mainLinks" paramName="mlinks" />
    </main>
  );
}

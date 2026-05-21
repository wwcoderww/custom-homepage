import LinksList from '@/components/linkList/LinksList';
import SidebarPanel from '@/components/searchPanel/SidebarPanel';

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <SidebarPanel paramName="mlinks" tableName="main_links" />
      <LinksList tableName="main_links" paramName="mlinks" />
    </main>
  );
}

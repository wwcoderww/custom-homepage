import Links from '@/components/links/links';

export default async function Sidebar() {
  return (
    <div className="hidden h-screen flex-col gap-2 overflow-y-scroll bg-slate-900 px-2 sm:flex">
      <Links paramName="sblinks" tableName="sidebarLinks" />
    </div>
  );
}

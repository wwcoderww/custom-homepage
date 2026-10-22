import Links from '@/components/links/links';

export default async function Sidebar() {
  return (
    <div className="bg-backgroundDark hidden h-screen flex-col gap-2 overflow-y-scroll px-2 sm:flex">
      <Links paramName="sblinks" group={1} />
    </div>
  );
}

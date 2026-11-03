import Links from '@/components/links/links';

export default async function Sidebar() {
  return (
    <div className="hidden h-screen flex-col gap-2 overflow-y-scroll bg-zinc-500/30 px-1 sm:flex md:px-2">
      <Links paramName="sblinks" group={0} />
    </div>
  );
}

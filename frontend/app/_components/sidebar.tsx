import Links from '@/components/links/links';

export default async function Sidebar() {
  return (
    <div className="hidden h-screen flex-col gap-2 overflow-y-scroll bg-linear-to-bl from-slate-900 to-slate-900/90 px-1 sm:flex md:px-2">
      <Links paramName="sblinks" group={0} />
    </div>
  );
}

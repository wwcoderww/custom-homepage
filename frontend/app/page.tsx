import Links from '@/components/links/links';

export default function page() {
  return (
    <div className="h-full w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-2">
      <Links paramName="mLinks" group={1} />
    </div>
  );
}

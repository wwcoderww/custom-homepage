import Links from '@/components/links/links';

export default function page() {
  return (
    <div className="h-full w-full px-2">
      <Links paramName="mLinks" group={1} />
    </div>
  );
}

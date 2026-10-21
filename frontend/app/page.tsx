import Links from '@/components/links/links';

export default function Home() {
  return (
    <div className="h-full w-full px-1">
      <Links paramName="mLinks" tableName="mainLinks" />
    </div>
  );
}

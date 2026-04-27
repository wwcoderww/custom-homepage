import SidebarLi from './SidebarLi';

const quickLinks: QuickLinkType[] = [
  { label: 'Github' },
  { label: 'TailwindCSS' },
  { label: 'RoadMap' },
  { label: 'Supabase' },
  { label: 'Gmail' },
  { label: 'Capital One' },
];

type QuickLinkType = {
  label: string;
};

export default function SidebarList() {
  return (
    <ul className="flex flex-col gap-4">
      {quickLinks.map((value) => (
        <SidebarLi label={value.label} key={value.label} />
      ))}
    </ul>
  );
}

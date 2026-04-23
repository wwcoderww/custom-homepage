import SidebarLi from './SidebarLi';

export default function SidebarList() {
  return (
    <ul className="flex flex-col gap-4">
      <SidebarLi label="GitHub" />
      <SidebarLi label="Docs - Testing" />
      <SidebarLi label="TailwindCSS" />
      <SidebarLi label="GitHub" />
      <SidebarLi label="The Odin Project" />
      <SidebarLi label="Gmail" />
      <SidebarLi label="Proton" />
    </ul>
  );
}

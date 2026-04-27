type SideBarLiProps = {
  label: string;
};

export default function SidebarLi({ label }: SideBarLiProps) {
  return <li className="flex-1 text-center">{label}</li>;
}

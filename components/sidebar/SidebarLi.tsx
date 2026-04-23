type SideBarLiProps = {
  label: string;
};

export default function SidebarLi({ label }: SideBarLiProps) {
  return <li className="text-center">{label}</li>;
}

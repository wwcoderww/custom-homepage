type SideBarLiProps = {
  label: string;
};

export default function SidebarLi({ label }: SideBarLiProps) {
  return (
    <li className="flex-1 text-center bg-white border border-slate-200 hover:bg-slate-50 hover:cursor-pointer">
      {label}
    </li>
  );
}

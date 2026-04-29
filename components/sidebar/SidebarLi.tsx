type SideBarLiProps = {
  label: string;
};

export default function SidebarLi({ label }: SideBarLiProps) {
  return (
    <li className="flex-1 text-center bg-blue-800 border border-slate-200 hover:bg-blue-400 hover:cursor-pointer text-lg">
      {label}
    </li>
  );
}

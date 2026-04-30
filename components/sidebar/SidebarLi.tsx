import { QuickLinkType } from '@/lib/types';

type SideBarLiProps = {
  item: QuickLinkType;
  handleClick: (item: QuickLinkType) => void;
};

export default function SidebarLi({ item, handleClick }: SideBarLiProps) {
  return (
    <li
      className="flex-1 text-center bg-blue-800 border border-slate-200 hover:bg-blue-400 hover:cursor-pointer text-lg"
      onClick={() => handleClick(item)}
    >
      {item.label}
    </li>
  );
}

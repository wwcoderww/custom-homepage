import { QuickLinkType } from '@/lib/types';

type SideBarLiProps = {
  item: QuickLinkType;
  handleClick: (item: QuickLinkType) => void;
  isEditing: boolean;
};

const containerStyle =
  'flex-1 text-center bg-blue-800 border border-slate-200 hover:bg-blue-400 hover:cursor-pointer text-lg';

export default function SidebarLi({
  item,
  handleClick,
  isEditing,
}: SideBarLiProps) {
  return (
    <>
      {isEditing ? (
        <li className={containerStyle} onClick={() => handleClick(item)}>
          {item.name}
        </li>
      ) : (
        <a
          className={containerStyle}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      )}
    </>
  );
}

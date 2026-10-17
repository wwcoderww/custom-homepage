import { QuickLinkType } from '@/lib/types';
import ButtonItem from '../ButtonItem';

type SideBarLiProps = {
  item: QuickLinkType;
  handleClick: (item: QuickLinkType) => void;
  isEditing: boolean;
};

export default function SidebarLi({
  item,
  handleClick,
  isEditing,
}: SideBarLiProps) {
  return (
    <>
      {isEditing ? (
        <ButtonItem
          label={item.name}
          onClick={() => handleClick(item)}
          customClass="rounded-lg"
        />
      ) : (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1"
        >
          <ButtonItem label={item.name} customClass="rounded-lg" />
        </a>
      )}
    </>
  );
}

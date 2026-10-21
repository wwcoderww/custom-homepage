import { QuickLinkType } from '@/lib/types';
import ButtonItem from '../../ButtonItem';
import { useLinksContext } from '../context/links-context';

type SideBarLiProps = {
  item: QuickLinkType;
  handleClick: (item: QuickLinkType) => void;
};

export default function SidebarLi({ item, handleClick }: SideBarLiProps) {
  const { isEditing, isAdding } = useLinksContext();
  return (
    <>
      {isEditing || isAdding ? (
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

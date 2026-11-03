import { QuickLinkType } from '@/lib/types';
import ButtonItem from '../../button-item';
import { useLinksContext } from '../context/links-context';

type LinkItemProps = {
  item: QuickLinkType;
  handleClick: (item: QuickLinkType) => void;
};

export default function LinkItem({ item, handleClick }: LinkItemProps) {
  const { isEditing, isAdding } = useLinksContext();
  return (
    <div className="flex flex-1">
      {isEditing || isAdding ? (
        <ButtonItem
          label={item.name}
          onClick={() => handleClick(item)}
          customClass="rounded-lg"
        />
      ) : (
        <a
          href={item.link}
          target="_self"
          rel="noopener noreferrer"
          className="flex flex-1"
        >
          <ButtonItem label={item.name} customClass="rounded-lg" />
        </a>
      )}
    </div>
  );
}

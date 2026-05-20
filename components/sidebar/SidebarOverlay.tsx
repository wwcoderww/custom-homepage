import { QuickLinkType } from '@/lib/types';
import Button from '../Button';
import SidebarOverlayForm from './SidebarOverlayForm';
import { useSidebarContext } from '@/context/SidebarContext';

type SidebarOverlayProps = {
  selected: QuickLinkType | null;
};

export default function SidebarOverlay({ selected }: SidebarOverlayProps) {
  const { setSelectedID } = useSidebarContext();

  if (!selected) return;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={() => setSelectedID(null)}
    >
      <div
        className="rounded-lg bg-blue-500 p-4 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <Button
            className="my-1 text-red-600"
            handleClick={() => setSelectedID(null)}
            style="danger"
          >
            close
          </Button>
        </div>
        <SidebarOverlayForm selected={selected} />
      </div>
    </div>
  );
}

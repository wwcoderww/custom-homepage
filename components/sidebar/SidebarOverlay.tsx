import { QuickLinkType } from '@/lib/types';
import Button from '../Button';
import SidebarOverlayForm from './SidebarOverlayForm';

type SidebarOverlayProps = {
  selected: QuickLinkType | null;
  setSelectedID: (selected: string | null) => void;
};

export default function SidebarOverlay({
  setSelectedID,
  selected,
}: SidebarOverlayProps) {
  if (!selected) return;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => setSelectedID(null)}
    >
      <div
        className="bg-blue-500 p-4 rounded-lg text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <Button
            className=" text-red-600 my-1"
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

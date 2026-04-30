import { QuickLinkType } from '@/lib/types';
import InputField from '../InputField';
import SidebarOverlayForm from './SidebarOverlayForm';
import Button from '../Button';

type SidebarOverlayProps = {
  selected: QuickLinkType | null;
  setSelected: (selected: QuickLinkType | null) => void;
};

export default function SidebarOverlay({
  setSelected,
  selected,
}: SidebarOverlayProps) {
  if (!selected) return;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => setSelected(null)}
    >
      <div
        className="bg-slate-200 p-4 rounded-lg text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <Button
            className=" text-red-600"
            handleClick={() => setSelected(null)}
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

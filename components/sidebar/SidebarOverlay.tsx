import { useSidebarContext } from '@/context/SidebarContext';
import Button from '../Button';
import SidebarOverlayForm from './SidebarOverlayForm';

export default function SidebarOverlay() {
  const { setSelectedID, selected } = useSidebarContext();

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
        <SidebarOverlayForm />
      </div>
    </div>
  );
}

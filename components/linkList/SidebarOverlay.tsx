'use client';
import Button from '../Button';
import SidebarOverlayForm from './SidebarOverlayForm';
import { useLinkListContext } from './context/LinkListContext';

export default function SidebarOverlay() {
  const { setSelectedID, selected } = useLinkListContext();

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

'use client';
import Button from '../../Button';
import SidebarOverlayForm from './overlay-form';
import { useLinksContext } from '../context/links-context';

export default function SidebarOverlay() {
  const { setSelectedID, selected } = useLinksContext();

  if (!selected) return;

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50"
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

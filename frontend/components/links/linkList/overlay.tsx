'use client';
import Button from '../../button';
import { useLinksContext } from '../context/links-context';
import OverlayForm from './overlay-form';

export default function Overlay() {
  const { setSelectedID, selected } = useLinksContext();

  function handleClickOutside() {
    setSelectedID(null);
  }

  if (!selected) return;

  return (
    <div
      className="fixed inset-0 z-300 flex items-center justify-center bg-black/50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-bgPrimary/90 flex flex-col rounded-4xl border-4 border-white p-4 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-1 mb-6 flex justify-end">
          <Button
            className="rounded-2xl! px-3 text-4xl font-extrabold text-red-600 hover:translate-y-0!"
            handleClick={handleClickOutside}
            style="danger"
          >
            X
          </Button>
        </div>
        <OverlayForm />
      </div>
    </div>
  );
}

'use client';
import Button from '../../button';
import { useLinksContext } from '../context/links-context';
import OverlayForm from './overlay-form';

export default function Overlay() {
  const { setSelectedID, selected } = useLinksContext();

  function handleClickOutside() {
    setSelectedID(null);
  }

  if (!selected) return null;

  return (
    <div
      className="fixed inset-0 z-300 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div
        className="relative flex w-full max-w-lg flex-col rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 text-zinc-100 shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-1.5 text-xl font-medium text-zinc-400 hover:cursor-pointer hover:text-zinc-100"
          onClick={handleClickOutside}
        >
          ✕
        </button>

        <div className="mt-2 mb-2">
          <div className="text-xl font-semibold text-white">Edit Link</div>
          <p className="mt-0.5 text-xs text-zinc-400">
            Update items settings below
          </p>
        </div>

        <OverlayForm />
      </div>
    </div>
  );
}

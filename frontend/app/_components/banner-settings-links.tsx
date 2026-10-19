import ButtonItem from '@/components/ButtonItem';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { toast } from 'sonner';

type BannerLinksType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BannerLinks({ setIsOpen }: BannerLinksType) {
  const session = authClient.useSession();

  return (
    <>
      <div
        className="fixed inset-0 z-101 bg-black/30"
        onClick={() => setIsOpen(false)}
      />
      <div
        className="absolute top-full right-0 z-102 w-48 divide-y-2 divide-slate-900 rounded-xl border-3 border-slate-900 bg-blue-800 text-xl text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* First Item */}
        {session.data ? (
          <ButtonItem
            label={'sign out'}
            customClass="border-0 rounded-xl py-1 w-full"
            onClick={() => {
              setIsOpen(false);
              toast.success('Logged out!');
            }}
          />
        ) : (
          <Link
            href={'/auth'}
            onClick={() => setIsOpen(false)}
            className="flex flex-1"
          >
            <ButtonItem
              label={'sign in'}
              customClass="border-0 rounded-xl py-1"
            />
          </Link>
        )}
      </div>
    </>
  );
}

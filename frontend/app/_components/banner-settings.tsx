'use client';

import ButtonItem from '@/components/ButtonItem';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BannerSettings() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative inline-block">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`z-102 transform transition-transform duration-300 hover:cursor-pointer ${isOpen ? 'rotate-45' : 'rotate-0'} relative`}
      >
        <Image
          src={'/assets/settings.svg'}
          alt="settingsIcon"
          width={36}
          height={36}
        />
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-101 bg-black/40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className="absolute top-full right-0 z-102 w-48 divide-y-2 divide-slate-900 rounded-xl border-3 border-slate-900 bg-blue-800 text-xl text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
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
          </div>
        </>
      )}
    </div>
  );
}

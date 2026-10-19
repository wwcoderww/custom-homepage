'use client';

import Image from 'next/image';
import { useState } from 'react';
import BannerLinks from './banner-settings-links';

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
      {isOpen && <BannerLinks setIsOpen={setIsOpen} />}
    </div>
  );
}

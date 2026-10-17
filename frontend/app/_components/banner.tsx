import Link from 'next/link';
import BannerSettings from './banner-settings';

const itemStyle =
  'py-3 text-xl hover:cursor-pointer hover:-translate-y-0.5 hover:opacity-100 opacity-95 duration-100 ease-in-out transition';

export default function Banner() {
  return (
    <div className="flex items-center border-b border-zinc-200 pr-1">
      <ul className="flex flex-1 justify-evenly">
        <Link href={'/'} className={itemStyle}>
          More Links
        </Link>
        <Link href={'/notes'} className={itemStyle}>
          Notepad
        </Link>
        <Link href={'/'} className={itemStyle}>
          ItemXYZA
        </Link>
        <Link href={'/'} className={itemStyle}>
          ItemXYZA
        </Link>
      </ul>
      <BannerSettings />
    </div>
  );
}

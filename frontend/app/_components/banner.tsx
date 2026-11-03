import Link from 'next/link';
import BannerSettings from './banner/banner-settings';

const itemStyle =
  'py-3 text-xl hover:cursor-pointer hover:-translate-y-0.5 hover:opacity-100 opacity-95 duration-100 ease-in-out transition';

export default function Banner() {
  return (
    <div className="flex items-center bg-zinc-500/30 py-1 pr-1">
      <ul className="flex flex-1 justify-evenly">
        <Link href={'/'} className={itemStyle}>
          <p className="sm:hidden">G1</p>
          <p className="hidden sm:inline">Group1</p>
        </Link>
        <Link href={'/group2'} className={itemStyle}>
          <p className="sm:hidden">G2</p>
          <p className="hidden sm:inline">Group2</p>
        </Link>
        <Link href={'/group3'} className={itemStyle}>
          <p className="sm:hidden">G3</p>
          <p className="hidden sm:inline">Group3</p>
        </Link>
        <Link href={'/group4'} className={itemStyle}>
          <p className="sm:hidden">G4</p>
          <p className="hidden sm:inline">Group4</p>
        </Link>
      </ul>
      <BannerSettings />
    </div>
  );
}

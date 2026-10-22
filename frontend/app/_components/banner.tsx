import Link from 'next/link';
import BannerSettings from './banner/banner-settings';

const itemStyle =
  'py-3 text-xl hover:cursor-pointer hover:-translate-y-0.5 hover:opacity-100 opacity-95 duration-100 ease-in-out transition';

export default function Banner() {
  return (
    <div className="flex items-center border-b border-zinc-200 pr-1">
      <ul className="flex flex-1 justify-evenly">
        <Link href={'/'} className={itemStyle}>
          Group1
        </Link>
        <Link href={'/group2'} className={itemStyle}>
          Group2
        </Link>
        <Link href={'/group3'} className={itemStyle}>
          Group3
        </Link>
        <Link href={'/group4'} className={itemStyle}>
          Group4
        </Link>
      </ul>
      <BannerSettings />
    </div>
  );
}

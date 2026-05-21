import Link from 'next/link';
import { CiSettings } from 'react-icons/ci';

const itemStyle = 'py-3 text-xl hover:cursor-pointer hover:scale-95 transition';

export default function Banner() {
  return (
    <div className="flex items-center">
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
      <CiSettings
        className={`mr-2 text-4xl transition hover:scale-95 hover:cursor-pointer`}
      />
    </div>
  );
}

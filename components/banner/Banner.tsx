import { CiSettings } from 'react-icons/ci';

const itemStyle = 'py-3 text-xl hover:cursor-pointer hover:scale-95 transition';

export default function Banner() {
  return (
    <div className="flex items-center">
      <ul className="flex flex-1 justify-evenly">
        <li className={itemStyle}>More Links</li>
        <li className={itemStyle}>Notepad</li>
        <li className={itemStyle}>ItemXYZA</li>
        <li className={itemStyle}>ItemXYZA</li>
      </ul>
      <CiSettings
        className={`mr-2 text-4xl transition hover:scale-95 hover:cursor-pointer`}
      />
    </div>
  );
}

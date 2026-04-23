import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div className="flex gap-1.5 flex-1">
      <FaSearch className="h-full w-auto" />
      <input type="text" className="flex-1" />
    </div>
  );
}

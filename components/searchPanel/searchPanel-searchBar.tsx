'use client';
import { FaSearch } from 'react-icons/fa';
import InputField from './searchPanel-inputFields';

type SearchBarProps = {
  onChange: (value: string) => void;
  className?: string;
};

export default function Search({ onChange, className }: SearchBarProps) {
  return (
    <div className="flex flex-1 gap-1.5">
      <FaSearch className="h-full w-auto" />
      <InputField
        onChange={onChange}
        className={`flex-1 ${className}`}
        placeholder="Search"
      />
    </div>
  );
}

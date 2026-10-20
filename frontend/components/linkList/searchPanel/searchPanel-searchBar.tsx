'use client';
import { FaSearch } from 'react-icons/fa';
import InputField from './searchPanel-inputFields';
import { ChangeEventHandler } from 'react';

type SearchBarProps = {
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  className?: string;
};

export default function Search({ onChange, className }: SearchBarProps) {
  return (
    <div className="flex flex-1 gap-1.5">
      <FaSearch className="h-full w-auto" />
      <InputField
        onChange={onChange}
        customClass={`flex-1 ${className}`}
        placeholder="Search"
        variant="noinput"
      />
    </div>
  );
}

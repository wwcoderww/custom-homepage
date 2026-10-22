'use client';
import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLinksContext } from '../context/links-context';
import { useUpdateQuery } from '../hooks/useUpdateQuery';
import InputField from './input-fields';

export default function Search() {
  const { paramName } = useLinksContext();
  const updateQuery = useUpdateQuery(paramName);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    updateQuery(e.target.value);
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement>) {
    setTimeout(() => {
      updateQuery('');
      e.target.value = '';
    }, 100);
  }

  return (
    <div className="flex flex-1 gap-1.5">
      <FaSearch className="h-full w-auto" />
      <InputField
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        customClass={`flex-1`}
        placeholder="Search"
        variant="noinput"
      />
    </div>
  );
}

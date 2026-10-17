import { ReactNode } from 'react';

type ButtonItemType = {
  label: string | ReactNode;
  customClass?: string;
  onClick?: () => void;
};

export default function ButtonItem({
  label,
  customClass,
  onClick,
}: ButtonItemType) {
  return (
    <button
      className={`${customClass} flex-1 border border-slate-200 bg-blue-800 text-center text-lg hover:cursor-pointer hover:bg-blue-600`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

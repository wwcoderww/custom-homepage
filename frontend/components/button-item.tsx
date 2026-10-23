import { ReactNode } from 'react';

type ButtonItemType = {
  label: string | ReactNode;
  customClass?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
};

export default function ButtonItem({
  label,
  customClass,
  onClick,
  type,
}: ButtonItemType) {
  return (
    <button
      className={`${customClass} bg-bgPrimary hover:bg-bgHover flex-1 border border-slate-200 text-center text-lg hover:cursor-pointer`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

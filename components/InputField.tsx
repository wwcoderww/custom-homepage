'use client';

type InputFieldProps = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
  name?: string;
};

export default function InputField({
  onChange,
  defaultValue,
  className = '',
  name,
}: InputFieldProps) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      className={`focus:outline-none px-1 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
      onChange={(e) => onChange?.(e.target.value)}
      name={`${name}`}
    />
  );
}

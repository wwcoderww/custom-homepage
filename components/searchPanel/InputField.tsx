'use client';

type InputFieldProps = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  name?: string;
};

export default function InputField({
  onChange,
  defaultValue = '',
  className = '',
  name,
  placeholder = '',
}: InputFieldProps) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={`border border-slate-300 px-1 placeholder-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none ${className}`}
      onChange={(e) => onChange?.(e.target.value)}
      name={name}
      id={name}
    />
  );
}

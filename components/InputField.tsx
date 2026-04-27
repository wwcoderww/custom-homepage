'use client';

type InputFieldProps = {
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function InputField({
  onChange,
  placeholder,
  className = '',
}: InputFieldProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`focus:outline-none focus:ring-0 ${className}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

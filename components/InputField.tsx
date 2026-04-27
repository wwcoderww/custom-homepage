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
      className={className}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

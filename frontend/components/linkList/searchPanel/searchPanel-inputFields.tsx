import { ChangeEventHandler } from 'react';
import {
  FieldError,
  FieldValues,
  UseFormRegister,
  FieldErrorsImpl,
  Merge,
  Path,
  RegisterOptions,
} from 'react-hook-form';

type InputFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  variant?: 'textarea' | 'select' | 'noinput';
  name?: Path<TFieldValues>;
  children?: React.ReactNode;
  validation?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  placeholder?: string | undefined;
  customClass?: string;
  disabled?: boolean;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  register?: UseFormRegister<TFieldValues>;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>
    | undefined;
};

const defaultClass =
  'border border-slate-300 px-1 placeholder-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none';
const textAreaClass = 'h-[8lh]! rounded-2xl! py-1.5!';
const errorClass = 'border-3 border-solid border-red-700 bg-red-200';

export default function InputField<
  TFieldValues extends FieldValues = FieldValues,
>({
  error,
  placeholder,
  customClass,
  name,
  register,
  validation,
  variant,
  children,
  type,
  disabled = false,
  onChange,
}: InputFieldProps<TFieldValues>) {
  const combinedClass = `${customClass} ${defaultClass} ${error && errorClass}`;

  const hookFormBindings = register && name ? register(name, validation) : {};

  if (variant === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        {...hookFormBindings}
        className={`${textAreaClass} ${combinedClass}`}
      />
    );
  }

  if (variant === 'select') {
    return (
      <select
        {...hookFormBindings}
        disabled={disabled}
        className={`${combinedClass}`}
      >
        {children}
      </select>
    );
  }

  if (variant === 'noinput') {
    return <input className={`${combinedClass}`} onChange={onChange} />;
  }

  return (
    <>
      <input
        placeholder={placeholder}
        disabled={disabled}
        className={`${combinedClass}`}
        type={type}
        {...hookFormBindings}
      />
    </>
  );
}

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
  variant?: 'textarea' | 'select' | 'search';
  name?: Path<TFieldValues>;
  children?: React.ReactNode;
  validation?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  defaultValue?: string;
  placeholder?: string | undefined;
  customClass?: string;
  disabled?: boolean;
  type?: string;
  onBlur?: ChangeEventHandler<HTMLInputElement> | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  register?: UseFormRegister<TFieldValues>;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>
    | undefined;
};

const defaultClass =
  'rounded-md border border-slate-300  placeholder-gray-100 focus:border-blue-500 focus:outline-none bg-slate-600/20 placeholder:text-zinc-500 px-1';
const textAreaClass = 'h-[8lh]! rounded-2xl! py-1.5!';
const errorClass = '!border-red-700 !bg-red-500/10';
const searchClass =
  'w-full min-w-0 placeholder:text-center sm:placeholder:text-left';

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
  defaultValue,
  disabled = false,
  onChange,
  onBlur,
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

  if (variant === 'search') {
    return (
      <input
        className={`${searchClass} ${combinedClass}`}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    );
  }

  return (
    <>
      <input
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        className={`${combinedClass}`}
        type={type}
        {...hookFormBindings}
      />
    </>
  );
}

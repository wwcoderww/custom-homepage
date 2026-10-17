import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form';

type AuthFormInputsProps = {
  formErrors: FieldErrors;
  getValues: UseFormGetValues<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isNew: boolean;
};

const labelClass = 'px-2 text-black rounded-lg bg-blue-200';
const labelErrorClass = 'bg-red-300';

export default function AuthFormInputs({
  formErrors,
  getValues,
  register,
  isNew,
}: AuthFormInputsProps) {
  return (
    <>
      <label className="" htmlFor="email">
        Email:
      </label>
      <input
        type="text"
        className={`${labelClass} ${formErrors.email && labelErrorClass}`}
        {...register('email', {
          required: 'Email is required...',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid E-mail Format',
          },
        })}
      />
      <label className="" htmlFor="password">
        Password:
      </label>
      <input
        type="password"
        className={`${labelClass} ${formErrors.password && labelErrorClass}`}
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 9, message: 'Minimum length is 9' },
        })}
      />
      {isNew && (
        <>
          <label className="" htmlFor="verifyPassword">
            Verify Password:
          </label>
          <input
            type="password"
            className={`${labelClass} ${formErrors.verifyPassword && labelErrorClass}`}
            {...register('verifyPassword', {
              required: 'Verify password is required',
              minLength: { value: 9, message: 'Minimum length is 9' },
              validate: (value) =>
                value === getValues('password') || 'Passwords must match',
            })}
          />
        </>
      )}
    </>
  );
}

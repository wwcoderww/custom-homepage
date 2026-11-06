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

const labelClass = 'w-40 inline-block';
const inputClass = 'px-2 sm:mx-2 text-black rounded-lg bg-blue-200 ';
const labelErrorClass = 'bg-red-300';

export default function AuthFormInputs({
  formErrors,
  getValues,
  register,
  isNew,
}: AuthFormInputsProps) {
  return (
    <div className="flex flex-col gap-4 text-3xl">
      <div>
        <label className={labelClass} htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="text"
          className={`${inputClass} ${formErrors.email && labelErrorClass}`}
          {...register('email', {
            required: 'Email is required...',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid E-mail Format',
            },
          })}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          className={`${inputClass} ${formErrors.password && labelErrorClass}`}
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 9, message: 'Minimum length is 9' },
          })}
        />
      </div>
      {isNew && (
        <div>
          <label className="" htmlFor="verifyPassword">
            Verify Pass:
          </label>
          <input
            type="password"
            className={`${inputClass} ${formErrors.verifyPassword && labelErrorClass}`}
            {...register('verifyPassword', {
              required: 'Verify password is required',
              minLength: { value: 9, message: 'Minimum length is 9' },
              validate: (value) =>
                value === getValues('password') || 'Passwords must match',
            })}
          />
        </div>
      )}
    </div>
  );
}

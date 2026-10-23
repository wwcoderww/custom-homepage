'use client';
import Button from '@/components/button';
import usePutForm from '../hooks/forms/usePutForm';
import InputField from '../searchPanel/input-fields';

// Sleek, muted, smaller typography styling
export const formLabelStyle = 'text-zinc-400 text-sm font-medium w-24 shrink-0';
export const formSectionStyle =
  'flex gap-4 py-2.5 items-center w-full border-b border-zinc-800/60 last:border-0 ';

export default function OverlayForm() {
  const { handleSubmit, register, onSuccess, selected } = usePutForm();

  if (!selected) return null;

  return (
    <form
      className="flex flex-1 flex-col items-center justify-center gap-3 pt-4"
      onSubmit={handleSubmit(onSuccess)}
    >
      {/* Title Field */}
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Title</div>
        <InputField
          name="name"
          customClass="w-full bg-zinc-800/80 text-zinc-100 border border-zinc-700/50 focus:border-blue-500! focus:bg-zinc-800! rounded-xl px-3 py-2 outline-none text-md placeholder-zinc-500"
          defaultValue={selected.name}
          register={register}
        />
      </div>

      {/* Link Field */}
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Link</div>
        <InputField
          name="link"
          customClass="w-full bg-zinc-800/80 text-zinc-100 border border-zinc-700/50 focus:border-blue-500! focus:bg-zinc-800! rounded-xl px-3 py-2 outline-none text-md placeholder-zinc-500"
          defaultValue={selected.link}
          register={register}
        />
      </div>

      {/* Order Dropdown Section */}
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Display Order</div>
        <div className="relative w-full">
          <select
            id="order"
            key={selected.displayOrder}
            defaultValue={selected.displayOrder}
            className="text-md w-full appearance-none rounded-xl border border-zinc-700/50 bg-zinc-800/80 px-3 py-2 pr-8 text-zinc-100 outline-none hover:cursor-pointer focus:border-blue-500"
            {...register('displayOrder')}
          >
            {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
              <option
                key={num}
                value={num}
                className="bg-zinc-900 text-zinc-100"
              >
                {num}
              </option>
            ))}
          </select>
          {/* Custom Chevron Indicator */}
          <div className="absolute inset-y-0 right-0 flex items-center px-3 text-xs text-zinc-400">
            ▼
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        type="submit"
        className="text-md mt-6 w-full rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white shadow-lg shadow-blue-600/10 duration-200 hover:cursor-pointer hover:bg-blue-500"
      >
        Save Changes
      </button>
    </form>
  );
}

'use client';
import Button from '@/components/button';
import usePutForm from '../hooks/forms/usePutForm';
import InputField from '../searchPanel/input-fields';

export const formLabelStyle =
  'text-white font-normal text-4xl w-40 font-semibold';
export const formSectionStyle = `flex justify-between gap-3 py-1 items-center w-full`;

export default function OverlayForm() {
  const { handleSubmit, register, onSuccess, selected } = usePutForm();

  if (!selected) return null;

  return (
    <form
      className="flex flex-1 flex-col items-center justify-center gap-4 px-20 py-8 text-2xl"
      onSubmit={handleSubmit(onSuccess)}
    >
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Title:</div>
        <InputField
          name="name"
          customClass="bg-slate-300! focus:bg-slate-200! rounded-xl"
          defaultValue={selected.name}
          register={register}
        />
      </div>
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Link:</div>
        <InputField
          name="link"
          customClass="bg-slate-300! focus:bg-slate-200! rounded-xl"
          defaultValue={selected.link}
          register={register}
        />
      </div>
      <div className={`pt-8 ${formSectionStyle}`}>
        <div className={formLabelStyle}>Order:</div>

        <Button className="rounded-2xl!">
          <select
            id="order"
            key={selected.displayOrder}
            defaultValue={selected.displayOrder}
            className="px-1 text-center text-4xl hover:translate-y-0 hover:cursor-pointer"
            {...register('displayOrder')}
          >
            {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </Button>
      </div>
      <Button
        type="submit"
        className="mt-14 rounded-3xl! border-4 border-white bg-blue-600 px-8 py-3 text-4xl hover:-translate-y-2"
      >
        update
      </Button>
    </form>
  );
}

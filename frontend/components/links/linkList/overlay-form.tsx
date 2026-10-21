'use client';
import Button from '@/components/button';
import usePutForm from '../hooks/forms/usePutForm';
import usePutLink from '../hooks/forms/usePutLink';
import InputField from '../searchPanel/input-fields';

export const formLabelStyle = 'text-white text-lg';
export const formSectionStyle = `flex justify-between gap-3 py-1 items-center my-1`;

export default function SidebarOverlayForm() {
  const { handleSubmit, register, userId, setSelectedID, selected, tableName } =
    usePutForm();
  const mutate = usePutLink(setSelectedID, selected, tableName, userId);

  if (!selected) return null;

  return (
    <div className="mt-5 mb-4">
      <form className={formSectionStyle} onSubmit={handleSubmit(mutate)}>
        <div>
          <div className={formSectionStyle}>
            <div className={formLabelStyle}>Title:</div>
            <InputField
              name="name"
              customClass="bg-slate-300 !focus:bg-white"
              defaultValue={selected.name}
              register={register}
            />
          </div>
          <div className={formSectionStyle}>
            <div className={formLabelStyle}>Link:</div>
            <InputField
              name="link"
              customClass="bg-slate-300 focus:bg-slate-100"
              defaultValue={selected.link}
              register={register}
            />
          </div>
          <div className={formSectionStyle}>
            <div className={formLabelStyle}>Order:</div>

            <Button>
              <select
                id="order"
                key={selected.displayOrder}
                defaultValue={selected.displayOrder}
                className="px-1 hover:scale-110"
                {...register('displayOrder')}
              >
                <option value={0}>None</option>
                {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </Button>
            <Button type="submit">update</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

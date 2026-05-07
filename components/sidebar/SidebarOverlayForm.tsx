'use client';

import { updateLabel, updateLink, updateOrder } from '@/app/actions';
import { QuickLinkType } from '@/lib/types';
import Button from '../Button';
import InputField from '../InputField';

const formSectionStyle = `flex justify-between gap-3 py-1 items-center my-1`;
const formLabelStyle = 'text-white text-lg';

type SidebarOverlayFormProps = {
  selected: QuickLinkType;
};

export default function SidebarOverlayForm({
  selected,
}: SidebarOverlayFormProps) {
  return (
    <div className=" mb-4 mt-5">
      <form className={formSectionStyle} action={updateLabel}>
        <div className={formLabelStyle}>Title:</div>
        <InputField
          name="label"
          className="bg-slate-300 focus:bg-slate-100"
          defaultValue={selected.label}
        />
        <input type="hidden" defaultValue={selected.id} name="id" />

        <Button>update</Button>
      </form>
      <form className={formSectionStyle} action={updateLink}>
        <div className={formLabelStyle}>Link:</div>
        <InputField
          name="link"
          defaultValue={selected.link}
          className="bg-slate-300 focus:bg-slate-100"
        />
        <input type="hidden" defaultValue={selected.id} name="id" />
        <Button>update</Button>
      </form>
      <form action={updateOrder}>
        <select
          name="order"
          id="order"
          key={selected.display_order}
          defaultValue={selected.display_order}
          onChange={(e) => e.currentTarget?.form?.requestSubmit()}
        >
          {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="hidden" defaultValue={selected.id} name="id" />
      </form>
    </div>
  );
}

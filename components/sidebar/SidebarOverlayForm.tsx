'use client';

import { updateLink } from '@/app/actions';
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
    <form className=" mb-4 mt-5" action={updateLink}>
      {/* <div className={formSectionStyle}>
        <div className={formLabelStyle}>Title:</div>
        <InputField
          name="label"
          className="bg-slate-300 focus:bg-slate-100"
          defaultValue={selected.label}
        />
        <Button>update</Button>
      </div> */}
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Link:</div>
        <InputField
          name="link"
          defaultValue={selected.link}
          className="bg-slate-300 focus:bg-slate-100"
        />
        <input type="hidden" defaultValue={selected.id} name="id" />
        <Button>update</Button>
      </div>
    </form>
  );
}

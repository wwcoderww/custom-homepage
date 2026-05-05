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
  async function handleForm(formData: FormData) {
    const newItem = {
      ...selected,
      label: (formData.get('label') as string) || selected.label,
      link: (formData.get('link') as string) || selected.link || '',
    };

    await updateLink(newItem);
  }

  return (
    <form className=" mb-4 mt-5" action={handleForm}>
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Title:</div>
        <InputField
          name="label"
          className="bg-slate-300 focus:bg-slate-100"
          placeholder={selected.label}
        />
        <Button>update</Button>
      </div>
      <div className={formSectionStyle}>
        <div className={formLabelStyle}>Link:</div>
        <InputField
          name="link"
          placeholder={selected.link}
          className="bg-slate-300 focus:bg-slate-100"
        />
        <Button>update</Button>
      </div>
    </form>
  );
}

import { QuickLinkType } from '@/lib/types';
import InputField from '../InputField';
import Button from '../Button';

const formSectionStyle = `flex justify-between gap-3 py-1 items-center`;

type SidebarOverlayFormProps = {
  selected: QuickLinkType;
};

export default function SidebarOverlayForm({
  selected,
}: SidebarOverlayFormProps) {
  return (
    <form className="gap-2">
      <div className={formSectionStyle}>
        <div>Title:</div>
        <InputField name="label" placeholder={selected.label} />
        <Button>update</Button>
      </div>
      <div className={formSectionStyle}>
        <div>Link:</div>
        <InputField name="link" placeholder={selected.link} />
        <Button>update</Button>
      </div>
    </form>
  );
}

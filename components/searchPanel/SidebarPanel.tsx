// This compond component adds what is typed in search to params and also has form that returns a title/link entered by user

import Search from './Search';
import SidebarActions from './SidebarActions';
import SidebarForm from './SidebarForm';

type SidebarPanelProps = {
  formFunc: (formData: FormData) => Promise<void>;
  paramName: string;
};

export default function SidebarPanel({
  formFunc,
  paramName,
}: SidebarPanelProps) {
  return (
    <div className="my-4 flex flex-col gap-2">
      <div className="flex h-6">
        <Search paramName={paramName} />
        <SidebarActions />
      </div>
      <SidebarForm formFunc={formFunc} />
    </div>
  );
}

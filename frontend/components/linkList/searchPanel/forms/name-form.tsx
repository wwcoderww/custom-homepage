import Button from '@/components/Button';
import { formLabelStyle } from '../../LinksOverlayForm';
import { BackEndResponseType, QuickLinkType } from '@/lib/types';
import { useForm } from 'react-hook-form';
import InputField from '../searchPanel-inputFields';
import { updateLink } from '@/actions/searchPanel-actions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import formErrors from '@/lib/form-errors';
import { useLinksContext } from '../../context/links-context';

type NameLinkFormProps = {
  selected: QuickLinkType;
  tableName: string;
};

type FormDataReturnType = {
  name: string;
  link: string;
  id: string;
  tableName: string;
};

export const formSectionStyle = `flex justify-between gap-3 py-1 items-center my-1`;

export default function NameLinkForm({
  selected,
  tableName,
}: NameLinkFormProps) {
  const { userId, setSelectedID } = useLinksContext();
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<FormDataReturnType>({
    defaultValues: {
      name: selected.name,
      link: selected.link,
      id: selected.id,
      tableName: tableName,
    },
  });

  const { mutate } = useMutation<BackEndResponseType, Error, FormData>({
    mutationFn: (formData: FormData) => updateLink(formData),
    onSuccess: (response) => {
      formErrors(response);
      if (response.success) {
        setSelectedID(null);
        toast.success('Updated');
        queryClient.invalidateQueries({
          queryKey: ['links', tableName, userId],
        });
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error('Backend Database Error');
    },
  });

  function onSubmit(formData: FormDataReturnType) {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('link', formData.link);
    data.append('id', formData.id);
    data.append('tableName', formData.tableName);
    mutate(data);
  }

  return (
    <form className={formSectionStyle} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={formSectionStyle}>
          <div className={formLabelStyle}>Title:</div>
          <InputField
            name="name"
            customClass="bg-slate-300 !focus:bg-white"
            defaultValue={selected.name}
            register={register}
          />
          <Button>update</Button>
        </div>
        <div className={formSectionStyle}>
          <div className={formLabelStyle}>Link:</div>
          <InputField
            name="link"
            customClass="bg-slate-300 focus:bg-slate-100"
            defaultValue={selected.link}
            register={register}
          />
          <Button>update</Button>
        </div>
      </div>
      <input type="hidden" defaultValue={selected.link} name="link" readOnly />
      <input type="hidden" defaultValue={selected.id} name="id" readOnly />
      <input type="hidden" defaultValue={tableName} name="tableName" readOnly />
    </form>
  );
}

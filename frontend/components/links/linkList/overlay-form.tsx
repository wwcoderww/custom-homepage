'use client';
import { updateLink } from '@/actions/searchPanel-actions';
import Button from '@/components/Button';
import formErrors from '@/lib/form-errors';
import { BackEndResponseType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useLinksContext } from '../context/links-context';
import InputField from '../searchPanel/input-fields';

type FormDataReturnType = {
  name: string;
  link: string;
  id: string;
  tableName: string;
  displayOrder: number;
};

export const formLabelStyle = 'text-white text-lg';
export const formSectionStyle = `flex justify-between gap-3 py-1 items-center my-1`;

export default function SidebarOverlayForm() {
  const { userId, setSelectedID, selected, tableName } = useLinksContext();
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<FormDataReturnType>({
    defaultValues: {
      name: selected?.name,
      link: selected?.link,
      id: selected?.id,
      tableName: tableName,
      displayOrder: selected?.displayOrder ?? 0,
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

  if (!selected) return null;

  function onSubmit(formData: FormDataReturnType) {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('link', formData.link);
    data.append('id', selected?.id || '');
    data.append('tableName', tableName);
    data.append('displayOrder', String(formData.displayOrder));
    mutate(data);
  }

  return (
    <div className="mt-5 mb-4">
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

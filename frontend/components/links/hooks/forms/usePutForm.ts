import { useForm } from 'react-hook-form';
import { useLinksContext } from '../../context/links-context';
import { UpdateLinkPayload } from '@/actions/searchPanel-actions';
import usePutLink from './usePutLink';

export type FormDataReturnType = {
  name: string;
  link: string;
  id: string;
  tableName: string;
  displayOrder: number;
};

export default function usePutForm() {
  const { userId, setSelectedID, selected } = useLinksContext();
  const mutate = usePutLink(setSelectedID, userId);
  const { register, handleSubmit } = useForm<UpdateLinkPayload>({
    defaultValues: {
      name: selected?.name,
      link: selected?.link,
      id: selected?.id,
      group: selected?.group,
      displayOrder: selected?.displayOrder,
      userId: userId,
    },
  });

  function onSuccess(formData: FormDataReturnType) {
    if (!selected || !userId) return;
    mutate({ ...formData, userId: userId, group: selected.group });
  }

  return { register, handleSubmit, onSuccess, userId, setSelectedID, selected };
}

import { useForm } from 'react-hook-form';
import { useLinksContext } from '../../context/links-context';

export type FormDataReturnType = {
  name: string;
  link: string;
  id: string;
  tableName: string;
  displayOrder: number;
};

export default function usePutForm() {
  const { userId, setSelectedID, selected, tableName } = useLinksContext();
  const { register, handleSubmit } = useForm<FormDataReturnType>({
    defaultValues: {
      name: selected?.name,
      link: selected?.link,
      id: selected?.id,
      tableName: tableName,
      displayOrder: selected?.displayOrder ?? 0,
    },
  });
  return { register, handleSubmit, userId, setSelectedID, selected, tableName };
}

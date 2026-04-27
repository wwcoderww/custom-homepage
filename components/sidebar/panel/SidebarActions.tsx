'use client';

import useIsEditing from '@/hooks/useIsEditing';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const iconClass = 'h-5/6 w-auto hover:cursor-pointer hover:h-full';

export default function SidebarActions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditing = useIsEditing();
  const Icon = isEditing ? FaCheck : MdEdit;

  function toggle() {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mode', isEditing ? 'view' : 'edit');
    router.push(`?${params.toString()}`);
  }

  return <Icon className={iconClass} onClick={toggle} />;
}

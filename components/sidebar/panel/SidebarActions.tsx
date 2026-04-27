'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const iconClass = 'h-5/6 w-auto hover:cursor-pointer hover:h-full';

export default function SidebarActions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const editing = mode === 'edit';
  const Icon = editing ? FaCheck : MdEdit;

  function toggle() {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mode', editing ? 'view' : 'edit');
    router.push(`?${params.toString()}`);
  }

  return <Icon className={iconClass} onClick={toggle} />;
}

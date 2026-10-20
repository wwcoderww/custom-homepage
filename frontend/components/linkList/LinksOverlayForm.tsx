'use client';

import { updateOrder } from '@/actions/searchPanel-actions';
import Button from '../Button';
import { useLinksContext } from './context/links-context';
import NameLinkForm from './searchPanel/forms/name-form';

export const formLabelStyle = 'text-white text-lg';

export default function SidebarOverlayForm() {
  const { tableName, selected } = useLinksContext();

  if (!selected) return;

  return (
    <div className="mt-5 mb-4">
      <NameLinkForm selected={selected} tableName={tableName} />

      <form action={updateOrder} className="flex justify-between">
        <div className={formLabelStyle}>Order:</div>

        <Button>
          <select
            name="order"
            id="order"
            key={selected.display_order}
            defaultValue={selected.display_order}
            className="px-1 hover:scale-110"
            onChange={(e) => e.currentTarget?.form?.requestSubmit()}
          >
            {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <input type="hidden" defaultValue={selected.id} name="id" />
          <input type="hidden" defaultValue={tableName} name="tableName" />
        </Button>
      </form>
    </div>
  );
}

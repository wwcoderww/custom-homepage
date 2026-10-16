'use client';

import {
  updateLabel,
  updateLink,
  updateOrder,
} from '@/actions/searchPanel-actions';
import Button from '../Button';
import { useLinkListContext } from './context/LinkListContext';

const formSectionStyle = `flex justify-between gap-3 py-1 items-center my-1`;
const formLabelStyle = 'text-white text-lg';

export default function SidebarOverlayForm() {
  const { tableName, selected } = useLinkListContext();

  if (!selected) return;

  return (
    <div className="mt-5 mb-4">
      <form className={formSectionStyle} action={updateLabel}>
        <div className={formLabelStyle}>Title:</div>
        <input
          name="name"
          className="bg-slate-300 focus:bg-slate-100"
          defaultValue={selected.name}
        />
        <input type="hidden" defaultValue={selected.id} name="id" />
        <input type="hidden" defaultValue={tableName} name="tableName" />

        <Button>update</Button>
      </form>
      <form className={formSectionStyle} action={updateLink}>
        <div className={formLabelStyle}>Link:</div>
        <input
          name="link"
          defaultValue={selected.link}
          className="bg-slate-300 focus:bg-slate-100"
        />
        <input type="hidden" defaultValue={selected.id} name="id" />
        <input type="hidden" defaultValue={tableName} name="tableName" />

        <Button>update</Button>
      </form>
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

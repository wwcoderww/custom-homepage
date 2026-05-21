'use client';
import { putNotes } from '@/actions/notesActions';
import { useState } from 'react';

type NotesTextAreaProps = {
  dbNotes: string;
};

export default function NotesTextArea({ dbNotes }: NotesTextAreaProps) {
  const [typed, setTyped] = useState<string | null>(dbNotes);
  console.log(typed);
  function handleChange(typed: string) {
    putNotes(typed);
  }
  return (
    <textarea
      className="h-full w-full bg-slate-600 p-1 focus:outline-0"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

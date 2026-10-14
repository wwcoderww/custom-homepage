'use client';
import { putNotes } from '@/actions/notesActions';
import { useState } from 'react';

type NotesTextAreaProps = {
  dbNotes: string;
};

export default function NotesTextArea({ dbNotes }: NotesTextAreaProps) {
  function handleChange(typed: string) {
    putNotes(typed);
  }
  return (
    <textarea
      className="h-full w-full bg-slate-600 p-1 focus:outline-0"
      defaultValue={dbNotes}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

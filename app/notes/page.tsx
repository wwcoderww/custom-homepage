import { getNotes } from '@/actions/notesActions';
import NotesTextArea from '@/components/notes/NotesTextArea';

export default async function page() {
  const dbNotes = await getNotes();
  return <NotesTextArea dbNotes={dbNotes} />;
}

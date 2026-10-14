import { getNotes } from '@/actions/notesActions';
import NotesTextArea from '@/app/notes/notes-textarea';

export default async function page() {
  const dbNotes = await getNotes();
  return <NotesTextArea dbNotes={dbNotes} />;
}

import NoteForm from "./components/NoteForm";
import { NoteData, Tag } from "../App";

const NewNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  );
};

export default NewNote;

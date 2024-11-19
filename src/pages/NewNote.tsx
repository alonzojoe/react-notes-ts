import NoteForm from "./components/NoteForm";
import { NoteData, Tag } from "../App";

const NewNote = ({
  onSubmit,
  onAddTag,
}: {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
}) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} />
    </>
  );
};

export default NewNote;

import NoteForm from "./components/NoteForm";
import { NoteData } from "../App";

const NewNote = () => {
  const onSubmit = (note: NoteData) => {
    console.log(note);
  };

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
};

export default NewNote;

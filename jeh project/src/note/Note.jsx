import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    const newNote = {
      ...note,
      text: e.target.value,
    };
    onChange(newNote);
  }

  function handleChangeDone(e) {
    const newNote = {
      ...note,
      done: e.target.checked,
    };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <p>{note.text}</p>
        <p>{note.name}</p>
        <p>{note.level}</p>
        {/* <button onClick={() => setIsEditing(true)}>Edit</button> */}
      </>
    );
  }

return (
<div className={`note ${note.done ? "done" : ""}`}>
  <input
    type="checkbox"
    checked={note.done}
    onChange={handleChangeDone}
  />

  <div className="note-content">
    {component}
    <p className="meta">
      {note.name} · Level {note.level}
    </p>
  </div>

  <div className="note-actions">
    {!isEditing && (
      <button onClick={() => setIsEditing(true)}>Edit</button>
    )}
    <button onClick={() => onDelete(note)}>Delete</button>
  </div>
</div>

);


}

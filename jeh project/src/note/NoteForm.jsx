import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [noteText, setNoteText] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  function handleNoteChange(e) {
    setNoteText(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLevelChange(e) {
    setLevel(e.target.value);
  }

  function handleClick() {
    onAddNote(noteText, name, level);
    setNoteText("");
    setName("");
    setLevel("");
  }

  return (
  <div className="form">
    <input
      placeholder="Add note"
      value={noteText}
      onChange={handleNoteChange}
    />
    <input
      placeholder="Name"
      value={name}
      onChange={handleNameChange}
    />
    <input
      type="number"
      placeholder="Level"
      value={level}
      onChange={handleLevelChange}
    />
    <button type="button" onClick={handleClick}>Add</button>
  </div>
);

}

// ciri2 parameter event handler
// 1. ada tulisan on di awal

import React, { useState } from "react";
import useStore from "../zustand/useStore";
import useUpdateNotes from "../hooks/useUpdateNotes"

function EditNotes({
  noteId,
  initialTitle,
  initialContent,
  displayTitle,
  displayContent,
  setDisplayTitle,
  setDisplayContent,
  onClose,
}) {
  const updateNotes = useUpdateNotes();

  const handleCancel = () => {
    setDisplayTitle(initialTitle);
    setDisplayContent(initialContent);
    onClose();
  };

  const handleSave = (() =>{
    updateNotes(noteId,displayTitle,displayContent);
    onClose();
 })

  return (
    <div className="edit-note-modal">
      <div className="edit-note-content">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditNotes;

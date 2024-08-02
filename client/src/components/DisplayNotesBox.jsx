import React, { useEffect, useState, useRef } from "react";
import EditNotes from "./EditNotes";
import DeleteNotes from "./DeleteNotes";

function DisplayNotesBox({ id, title, content }) {
  const [isEditing, setIsEditing] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(title);
  const [displayContent, setDisplayContent] = useState(content);
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textArea = textareaRef.current;
    if (textArea) {
      textArea.style.height = "auto"; // Reset height
      textArea.style.height = `${textArea.scrollHeight}px`; // Set height based on scrollHeight
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [displayContent]);

  return (
    <div className="flex flex-col w-full sm:w-[390px] bg-white shadow-md p-4 border-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 mb-4">
      <input
        type="text"
        className="text-3xl p-2 dark:bg-gray-800 dark:text-white focus:outline-none"
        value={displayTitle}
        onChange={(event) => setDisplayTitle(event.target.value)}
        readOnly={!isEditing}
      />
      <textarea
        ref={textareaRef}
        className="text-lg p-2 h-auto resize-none overflow-hidden dark:bg-gray-800 dark:text-white focus:outline-none"
        style={{ whiteSpace: "pre-wrap" }}
        value={displayContent}
        onChange={(event) => setDisplayContent(event.target.value)}
        // onInput={adjustTextareaHeight}
        readOnly={!isEditing}
      ></textarea>
      <div className="flex justify-between mt-2">
        {!isEditing ? (
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          <EditNotes
            noteId={id}
            initialTitle={title}
            initialContent={content}
            displayTitle={displayTitle}
            displayContent={displayContent}
            setDisplayTitle={setDisplayTitle}
            setDisplayContent={setDisplayContent}
            onClose={() => setIsEditing(false)}
          />
        )}
        <DeleteNotes id={id} />
      </div>
    </div>
  );
}

export default DisplayNotesBox;

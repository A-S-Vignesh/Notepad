import React, { useContext } from "react";
import DisplayNotesBox from "./DisplayNotesBox";
import useStore from "../zustand/useStore";
import { AuthContext } from "../context/authContext";
import { decryptNote } from "../utils/encryptAndDecrypt";

function DisplayNotes() {
  const { notes } = useStore();
  const { user } = useContext(AuthContext);

  return (
    <div className="flex sm:flex-row items-center justify-center flex-wrap gap-6 sm:gap-x-10 lg:gap-x-16">
      {user ? (
        notes?.map((data) => {
          let decryptedTitle = "";
          let decryptedContent = "";

          try {
            decryptedTitle = decryptNote(user?.googleId, data.title);
            decryptedContent = decryptNote(user?.googleId, data.description);
          } catch (error) {
            console.error("Decryption error:", error);
          }

          return (
            <DisplayNotesBox
              key={data._id}
              id={data._id}
              title={decryptedTitle}
              content={decryptedContent}
            />
          );
        })
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
}

export default DisplayNotes;

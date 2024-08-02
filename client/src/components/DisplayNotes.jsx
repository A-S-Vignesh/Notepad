import React, { useState } from "react";
import DisplayNotesBox from "./DisplayNotesBox";
import useStore from "../zustand/useStore";
import { AuthContext } from "../context/authContext"; 
import { useContext } from "react";
import { decryptNote } from "../utils/encryptAndDecrypt";

function DisplayNotes() {
  const { notes, setNotes } = useStore();
  const { user } = useContext(AuthContext);
  
  return (
      <div className="flex sm:flex-row items-center justify-center flex-wrap gap-6 sm:gap-x-10 lg:gap-x-16">
        {notes?.map((data) => (
          <DisplayNotesBox
            key={data._id}
            id={data._id}
            title={decryptNote(user.googleId, data.title)}
            content={decryptNote(user.googleId,data.description)}
          />
        ))}
      </div>
  );
}

export default DisplayNotes;

import React from "react";
import useStore from "../zustand/useStore";
import { changeNoteAPI, getNotesAPI } from "../utils/constant";
import { encryptNote } from "../utils/encryptAndDecrypt";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function useUpdateNotes() {
  const { setNotes } = useStore();
   const { user } = useContext(AuthContext);
  const updateNotes = async (id, title, description) => {
    const encryptedTitle = encryptNote(user.googleId, title);
    const encryptedDescription = encryptNote(user.googleId, description);

    const response = await fetch(changeNoteAPI(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title:encryptedTitle, description:encryptedDescription }),
    });

    if (response.ok) {
      const rawdata = await fetch(getNotesAPI, { credentials: "include" });
      const data = await rawdata.json();
      setNotes(data);
      console.log(await response.json());
    } else {
      console.error("Failed to update the note");
    }
  };

  return updateNotes;
}

export default useUpdateNotes;

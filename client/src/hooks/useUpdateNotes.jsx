import React, { useState } from "react";
import useStore from "../zustand/useStore";
import { changeNoteAPI, getNotesAPI } from "../utils/constant";
import { encryptNote } from "../utils/encryptAndDecrypt";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function useUpdateNotes() {
  const { setNotes } = useStore();
  const { user } = useContext(AuthContext);
  const [editLoading, setEditLoading] = useState(false);

  const updateNotes = async (id, title, description) => {
    setEditLoading(true)
    try {
      const encryptedTitle = encryptNote(user.googleId, title);
      const encryptedDescription = encryptNote(user.googleId, description);

      const response = await fetch(changeNoteAPI(id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ title: encryptedTitle, description: encryptedDescription }),
      });

      if (response.ok) {
        const rawdata = await fetch(getNotesAPI, { credentials: "include" });
        const data = await rawdata.json();
        setNotes(data);
        console.log(await response.json());
      } else {
        console.error("Failed to update the note");
      }
    }
      catch (err) {
        console.log(err);
    }
    finally {
      setEditLoading(false);
    }
  };

  return { updateNotes, editLoading };
}

export default useUpdateNotes;

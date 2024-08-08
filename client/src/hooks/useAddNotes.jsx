import { getNotesAPI } from "../utils/constant";
import { useContext, useState } from "react";
import useStore from "../zustand/useStore";
import { encryptNote } from "../utils/encryptAndDecrypt";
import { AuthContext } from "../context/authContext";

function useAddNotes() {
  const { notes, setNotes } = useStore();
  const { user } = useContext(AuthContext);
  const [addLoading, setAddLoading] = useState(false);

  const addNotes = async (title, description) => {
    setAddLoading(true);
    const encryptedTitle = encryptNote(user?.googleId, title);
    const encryptedDescription = encryptNote(user?.googleId, description);

    try {
      const response = await fetch(getNotesAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: encryptedTitle,
          description: encryptedDescription,
        }),
      });
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const rawdata = await fetch(getNotesAPI, { credentials: "include" });
      const data = await rawdata.json();
      setNotes(data);
      console.log(await response.json());
    } catch (err) {
      console.log(err);
    } finally {
      setAddLoading(false);
    }
  };
  return { addNotes, addLoading };
}

export default useAddNotes;

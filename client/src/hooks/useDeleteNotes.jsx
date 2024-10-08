import { useState, useCallback, useEffect } from "react";
import useStore from "../zustand/useStore";
import useFetchNotes from "./useFetchNotes";
import { changeNoteAPI, getNotesAPI } from "../utils/constant";

const useDeleteNotes = () => {
  const { setNotes } = useStore();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const deleteNotes = async (id) => {
    try {
      setDeleteLoading(true)
      const response = await fetch(changeNoteAPI(id), {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
      const rawdata = await fetch(getNotesAPI,{credentials:"include"});
      const data = await rawdata.json();
      setNotes(data);
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
    finally {
      setDeleteLoading(false)
    }
  };
  return { deleteNotes, deleteLoading };
};

export default useDeleteNotes;

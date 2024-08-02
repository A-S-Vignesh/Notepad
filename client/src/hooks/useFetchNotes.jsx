import { useEffect, useState } from "react";
import useStore from "../zustand/useStore";
import { getNotesAPI } from "../utils/constant";

// const initialData = [
//   {
//     id: 1,
//     title: "Sun",
//     content: "Sun is the big ball of fire",
//   },
//   {
//     id: 2,
//     title: "Moon",
//     content: "Moon gives light to the earth in night",
//   },
//   {
//     id: 3,
//     title: "Sun",
//     content: "Sun is the big ball of fire",
//   },
//   {
//     id: 4,
//     title: "Moon",
//     content: "Moon gives light to the earth in night",
//   },
// ];

const useFetchNotes = () => {
  const { notes, setNotes } = useStore();

  const fetchData = async () => {
    // setLoading(true); // Set loading to true before starting fetch
    try {
      const response = await fetch(getNotesAPI, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      // setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only on mount

  
};

export default useFetchNotes;

import React from "react";
import "./index.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import useFetchNotes from "./hooks/useFetchNotes";

const App = () => {
  useFetchNotes();
  return (
    <div>
      <Header />
      <Notes />
    </div>
  );
};

export default App;

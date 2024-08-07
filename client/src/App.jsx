import React from "react";
import "./index.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import useFetchNotes from "./hooks/useFetchNotes";
import ScrollToTopButton from "./components/ScrollToTop";

const App = () => {
  useFetchNotes();
  return (
    <div className="relative">
      <Header />
      <Notes />
      <ScrollToTopButton />
    </div>
  );
};

export default App;

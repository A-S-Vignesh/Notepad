import React from "react";
import "./css/index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import useFetchNotes from "./hooks/useFetchNotes";
import ScrollToTopButton from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  useFetchNotes();
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <Notes />
      <ScrollToTopButton />
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;

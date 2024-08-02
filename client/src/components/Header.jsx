import React from 'react'
import Login from './Login';
import notesLogo from "../assets/noteslogo.png";
import DarkModeToggle from './DarkModeToggle';

function Header() {
  
  return (
    <div className=" flex justify-between border-b-2 border-black dark:border-white p-4 mb-4">
      <h1 className="text-5xl dark:text-white">
        <img src={notesLogo} alt="notes" width="50px" height="50px" />
      </h1>
      <div className=" flex-1 text-center">
        <h1 className="text-5xl dark:text-white">Notes 💭</h1>
      </div>
      <div className="flex flex-row text-center justify-center items-center">
        <Login />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header
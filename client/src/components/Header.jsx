import React, { useState, useContext } from "react";
import notesLogo from "../assets/noteslogo.png";
import DarkModeToggle from "./DarkModeToggle";
import { AuthContext } from "../context/authContext";
import SignIn from "./Auth/SignIn";
import SignOut from "./Auth/SignOut";

function Header() {
  const { user, signOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="border-b-2 border-black dark:border-white m-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="w-[40px] h-[40px] md:h-[50px] md:w-[50px]"
              src={notesLogo}
              alt="Logo"
            />
            <div className="ml-3 text-2xl md:text-3xl dark:text-white font-bold">
              Notes
            </div>
          </div>
          <div className="flex items-center">
            {!user ? (
              <SignIn />
            ) : (
              <div className="flex flex-row relative ml-4">
                <img
                  className="hidden md:block w-[40px] h-[40px] md:h-[50px] md:w-[50px] mr-2"
                  src={user?.photo}
                  alt="Profile"
                  style={{ borderRadius: "50%" }}
                />
                <img
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="md:hidden cursor-pointer w-[40px] h-[40px] md:h-[50px] md:w-[50px] mr-2"
                  src={user?.photo}
                  alt="Profile"
                  style={{ borderRadius: "50%" }}
                />
                <div className="hidden md:block">
                  <SignOut />
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-12 w-40 bg-white rounded-lg shadow-lg  z-20 dark:bg-gray-800 dark:text-white border-2 dark:border-gray-800">
                    <button
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 ease-in-out"
                      onClick={signOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

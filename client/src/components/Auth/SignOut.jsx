import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SignOut = () => {
  const { signOut } = useContext(AuthContext);

  return (
    // <button
    //   className="p-4 rounded-md text-lg dark:text-white"
    //   onClick={signOut}
    // >
    //   Sign out
    // </button>
    <button
      className="relative ml-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      onClick={signOut}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Sign Out
      </span>
    </button>
  );
};

export default SignOut;

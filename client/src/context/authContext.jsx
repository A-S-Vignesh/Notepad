import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import useStore from "../zustand/useStore"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { notes, setNotes } = useStore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/auth/me`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null); // Set user to null on error for better UI handling
      }
    };

    fetchUserData();
  }, []);

  const signIn = () => {
    // Redirect to the correct URL
    console.log("redirecting to backend " + import.meta.env.VITE_API_URL+"/api/auth/google");
    window.location.assign(`${import.meta.env.VITE_API_URL}/api/auth/google`);
  };

  const signOut = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {}, { withCredentials: true })
      .then(() => {
        setUser(null)
        setNotes(null)
        
      })
      .catch((err) => console.error(err));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

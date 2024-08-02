import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import useStore from "../zustand/useStore"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { notes, setNotes } = useStore();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
        withCredentials: true,
      })
      .then((response) => setUser(response.data.user))
      .catch(() => setUser(null));
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

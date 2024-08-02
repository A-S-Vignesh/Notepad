import React, { useContext } from "react";
import { AuthContext } from "../context/authContext"; // Import the context
import SignIn from "./Auth/SignIn";
import SignOut from "./Auth/SignOut";

function Login() {
  const { user } = useContext(AuthContext); // Access the user from AuthContext

  return (
    <>
      {!user ? (
        <SignIn /> // Show SignIn component if the user is not logged in
      ) : (
          
          <div className="flex flex-row items-center justify-center">
          <img
            src={user.photo}
            alt="Profile"
            style={{ borderRadius: "50%", width: "50px", height: "50px" }}
            />
            
          <SignOut />
        </div>
      )}
    </>
  );
}

export default Login;

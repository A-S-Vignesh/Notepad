import jwt from "jsonwebtoken";
import User from "../database/models/user.js"; // Adjust the import path based on your project structure

const protectRoute = async (req, res, next) => {
  try {
    console.log("Cookies received:", req.cookies);
    // Get the JWT from the cookies
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ code: 401, error: "Unauthorized User! token not matched" });
    }

    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ code: 401, error: "Unauthorized User not decoded!" });
    }

    // Find the user by using userID decoded from the token
    const user = await User.findById(decoded.user.id);
    if (!user) {
      return res.status(404).json({ code: 404, error: "No user found!" });
    }

    // Attach the user to the request object
    req.user = user;
    // Call the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ code: 500, error: "Internal Server Error!" });
  }
};

export default protectRoute;

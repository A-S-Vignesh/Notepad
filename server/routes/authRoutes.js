// routes/authRouter.js
import express from "express";
import passport from "../config/passport.js";
import { googleCallback, signout } from "../controllers/authController.js";

const router = express.Router();

// Redirect the user to Google for authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google will redirect the user to this URL after authentication
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/ " }),
  googleCallback
);

router.get("/me", async (req, res) => {
    await res.json({ user: req.user });
});

router.post("/logout", signout);


export default router;

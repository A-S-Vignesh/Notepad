import express from "express";
import path from "path";
import connectDB from "./database/database.js";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/index.js";
import passport from "passport";

dotenv.config();

const PORT = process.env.PORT || 5500;
const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectDB();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static(path.join(__dirname, "/client")));
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", apiRoutes);


app.get("*", (req, res) => {
  console.log("its running");
  res.sendFile(path.join(__dirname,"client","dist","index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ` + PORT);
});

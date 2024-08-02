import express from "express";
import noteRoutes from "./noteRoutes.js"
import authRoutes from "./authRoutes.js"

const routes = express.Router();


routes.use("/auth", authRoutes);
routes.use("/notes",noteRoutes);

export default routes;
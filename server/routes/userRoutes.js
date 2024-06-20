import express from "express";
import getUserProfileSidebarController from "../controllers/getUserProfileSidebarController.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.get("/", protectedRoute, getUserProfileSidebarController.sidebar);

export default router;

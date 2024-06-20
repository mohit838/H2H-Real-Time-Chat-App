import express from "express";
import messageController from "../controllers/messageController.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/send/:id", protectedRoute, messageController.massaging);

export default router;

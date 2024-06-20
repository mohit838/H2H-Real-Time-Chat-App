import express from "express";
import messageController from "../controllers/messageController.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router
  .get("/:id", protectedRoute, messageController.getAllMessage)
  .post("/send/:id", protectedRoute, messageController.massaging);

export default router;

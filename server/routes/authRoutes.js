import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

router
  .post("/signup", authController.register)
  .post("/login", () => {})
  .post("/refresh-token", () => {})
  .post("/logout", () => {});

export default router;

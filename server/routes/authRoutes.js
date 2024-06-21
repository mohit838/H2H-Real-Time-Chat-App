import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

router
  .post("/signup", authController.register)
  .post("/login", authController.login)
  .post("/logout", authController.logout);

export default router;

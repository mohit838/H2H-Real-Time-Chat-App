import express from "express";

const router = express.Router();

router
  .post("/signup", () => {})
  .post("/login", () => {})
  .post("/refresh-token", () => {})
  .post("/logout", () => {});

export default router;

import jwt from "jsonwebtoken";
import { JWT_TOKEN, NODE_ENV } from "../config/config.js";

export const genJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, JWT_TOKEN, { expiresIn: "15d" });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: NODE_ENV !== "development",
  });
};

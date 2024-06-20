import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../config/config.js";
import UserModel from "../models/UserModel.js";

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({
        error: "Unauthorized - No Token!",
      });
    }

    const verifyToken = jwt.verify(token, JWT_TOKEN);

    if (!verifyToken) {
      res.status(401).json({
        error: "Unauthorized - Invalid Token!",
      });
    }

    const user = await UserModel.findById(verifyToken.userId).select(
      "-password"
    );

    if (!user) {
      res.status(404).json({
        error: "User not found!",
      });
    }

    req.userId = user;
    next();
  } catch (error) {
    res.status(500).json({
      error: "Server error!",
    });
  }
};

export default protectedRoute;

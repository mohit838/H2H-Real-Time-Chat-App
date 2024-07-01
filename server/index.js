import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoSanitize from "express-mongo-sanitize"; // To prevent NoSQL injection
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { PORT } from "./config/config.js";
import connect from "./db/db.js";
import { app, server } from "./socket/socket.js";

// Use Express built-in middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Enabling the Helmet middleware
app.use(helmet());

// CORS Policies
const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Additional security middleware
app.use(mongoSanitize()); // Prevent NoSQL injection

// Import all routers of this project
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Use routes
app.use("/api/v1/h2h-auth", authRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/h2h-test", testRoutes);

// MongoDB and Server Setup
const SERVER_PORT = PORT || 8000;

// Connect DB first then server started
connect().then(() => {
  server.listen(SERVER_PORT, () =>
    console.log(`H2H Server Running On Port: ${SERVER_PORT}`)
  );
});

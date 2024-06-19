import cors from "cors";
import express from "express";
import helmet from "helmet";
import { PORT } from "./config/config.js";
import connect from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";

// Base Configurations
const app = express();
app.use(express.json());

// Enabling the Helmet middleware
app.use(helmet());

// Use Express built-in middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Cors Policies
// Restrictions in accessing
app.use(
  cors({
    // If you want to allow requests from any origin, you can set origin: '*'.
    origin: "http://localhost:5173", // If you want any restrictions then set frontend url
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// All Routers of this projects
// Auth routes
app.use("/api/v1/h2h-auth", authRoutes);

// Test route
app.use("/api/v1/h2h-test", testRoutes);

// MongoDB and Server Setups
const SERVER_PORT = PORT || 8000;

// Connect DB first then server started
connect().then(() => {
  app.listen(SERVER_PORT, () =>
    console.log(`H2H Server Running On Port: ${SERVER_PORT}`)
  );
});

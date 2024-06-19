import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connection from "./config/db";
import userRoutes from "./routes/user.routes";
const app = express();
const PORT = process.env.PORT || 5000;

// connect database
connection();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api", userRoutes);

// Listening port test
app.listen(PORT, () => {
  console.log(`You server is running on port number: ${PORT}`);
});

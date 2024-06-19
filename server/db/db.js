import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";

async function connect() {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(MONGO_URL);
    console.log("Database Connected Successfully!!");
    return db;
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
}

export default connect;

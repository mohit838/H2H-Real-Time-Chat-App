import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGODB_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const BACKEND = process.env.BACKEND;
const SALT = process.env.SALT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

export {
  ACCESS_TOKEN,
  BACKEND,
  EMAIL,
  MONGO_URL,
  PASSWORD,
  PORT,
  REFRESH_TOKEN,
  SALT,
};

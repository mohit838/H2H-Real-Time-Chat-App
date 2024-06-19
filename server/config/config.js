import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const BACKEND = process.env.BACKEND;
const SALT = process.env.SALT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const FRONTEND = process.env.FRONTEND;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;
const JWT_TOKEN = process.env.JWT_TOKEN;
const NODE_ENV = process.env.NODE_ENV;

export {
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRY,
  BACKEND,
  EMAIL,
  FRONTEND,
  JWT_TOKEN,
  MONGO_URL,
  NODE_ENV,
  PASSWORD,
  PORT,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRY,
  SALT,
};

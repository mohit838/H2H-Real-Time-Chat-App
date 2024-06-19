import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../config/config.js";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      trim: true,
    },
    refreshToken: {
      type: String,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

//Ref: https://mongoosejs.com/docs/middleware.html#pre
// options.validateModifiedOnly;

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  if (password) {
    return await bcryptjs.compare(password, this.password);
  }
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      userName: this.userName,
    },
    ACCESS_TOKEN,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    REFRESH_TOKEN,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
};

const UserModel = model("User", userSchema);

export default UserModel;

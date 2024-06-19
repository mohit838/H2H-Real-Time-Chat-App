import { Schema, model } from "mongoose";

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
      require: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const UserModel = model("User", userSchema);

export default UserModel;

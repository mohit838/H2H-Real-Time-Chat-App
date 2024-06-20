import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const MessageModel = model("message", messageSchema);

export default MessageModel;

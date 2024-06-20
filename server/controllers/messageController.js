import ConversationModel from "../models/conversationModel.js";
import MessageModel from "../models/messageModel.js";

class Messenger {
  // chatting
  async massaging(req, res) {
    try {
      const { message } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.userId._id;

      let conversations = await ConversationModel.findOne({
        participants: {
          $all: [senderId, receiverId],
        },
      });

      if (!conversations) {
        conversations = await ConversationModel.create({
          participants: [senderId, receiverId],
        });
      }

      const newMessage = new MessageModel({
        senderId,
        receiverId,
        message,
      });

      if (newMessage) {
        conversations.messages.push(newMessage._id);
      }

      return res.status(201).json({ msg: newMessage });
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}

export default new Messenger();

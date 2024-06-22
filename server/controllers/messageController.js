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

      // TODO:: Socket Io added later

      await Promise.all([conversations.save(), newMessage.save()]);

      return res.status(201).json({ msg: newMessage });
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }

  // Get all messages
  async getAllMessage(req, res) {
    try {
      const { id: userToChatId } = req.params;
      const senderId = req.userId._id;

      const conversation = await ConversationModel.findOne({
        participants: {
          $all: [senderId, userToChatId],
        },
      }).populate("messages");

      if (!conversation)
        return res.status(200).json({ msg: "Start conversation!?", data: [] });

      return res.status(200).json(conversation.messages);
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}

export default new Messenger();

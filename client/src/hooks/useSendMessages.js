import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

export const useSendMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  // Ensure selectConversation is not null before trying to access its properties
  if (!selectConversation) {
    console.error("No conversation selected!");
    return {
      loading,
      sendMessages: () => {
        toast.error("No conversation selected!");
      },
    };
  }

  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/v1/message/send/${selectConversation?._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
          }),
        }
      );
      const data = await res.json();

      if (data.error) toast.error("Data not fetched!");
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    sendMessages,
  };
};

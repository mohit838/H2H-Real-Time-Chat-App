import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

export const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/message/${selectConversation?._id}`);
        const data = await res.json();

        if (data.error) {
          toast.error("Data not fetched!");
        } else if (Array.isArray(data?.data) && data?.data.length === 0) {
          toast.success(`${data?.msg}`);
          setMessages([]);
        } else {
          setMessages(data);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectConversation?._id) getMessages();
  }, [selectConversation?._id, setMessages]);

  return {
    loading,
    messages,
  };
};

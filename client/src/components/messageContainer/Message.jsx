import { useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useGetMessages } from "../../hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";
import LoadingSpin from "../common/LoadingSpin";

const Message = () => {
  const { selectConversation, setSelectConversation } = useConversation();
  const { loading, messages } = useGetMessages();
  const { authUser } = useAuthContext();
  const lastMsgRef = useRef();

  useEffect(() => {
    return () => {
      setSelectConversation(null);
    };
  }, [setSelectConversation]);

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => {};
  }, [messages]);

  if (!selectConversation) {
    return <NoChatSelected />;
  }

  return (
    <>
      {loading ? (
        <LoadingSpin />
      ) : (
        <div className="flex flex-col">
          {messages.map((msg) => (
            <div
              key={msg._id}
              ref={lastMsgRef}
              className={`chat ${
                msg.senderId === selectConversation._id
                  ? "chat-start"
                  : "chat-end"
              }`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={
                      msg.senderId === selectConversation?._id
                        ? authUser?.user?.profilePic
                        : selectConversation?.profilePic
                    }
                  />
                </div>
              </div>
              <div className="chat-header">
                {msg.senderId === selectConversation._id
                  ? selectConversation.fullName
                  : "You"}
                <time className="text-xs opacity-50 pl-2">
                  {new Date(msg.createdAt).toLocaleTimeString()}
                </time>
              </div>
              <div className="chat-bubble">{msg.message}</div>
              <div className="chat-footer opacity-50">{"Delivered"}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Message;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center">
      {"No Chat Selected!!"}
    </div>
  );
};

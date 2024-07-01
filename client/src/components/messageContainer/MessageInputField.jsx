import { useState } from "react";
import { useSendMessages } from "../../hooks/useSendMessages";
import LoadingSpin from "../common/LoadingSpin";

const MessageInputField = () => {
  const { loading, sendMessages } = useSendMessages();
  const [writeToSendMessage, setWriteToSendMessage] = useState("");

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (!writeToSendMessage) return;
    await sendMessages(writeToSendMessage);
    setWriteToSendMessage("");
  };

  return (
    <form
      onSubmit={handleSubmitMessage}
      className="flex items-center gap-2 mb-5"
    >
      <input
        type="text"
        placeholder="Send your message..."
        className="input input-bordered rounded-xl w-full"
        value={writeToSendMessage}
        onChange={(e) => {
          setWriteToSendMessage(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-circle bg-gray-700">
        {loading ? (
          <LoadingSpin />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default MessageInputField;

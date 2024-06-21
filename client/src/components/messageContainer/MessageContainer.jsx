import Divider from "../common/Divider";
import MessageContent from "./MessageContent";
import MessageHeader from "./MessageHeader";
import MessageInputField from "./MessageInputField";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <MessageHeader />
      <Divider />
      <MessageContent />
      <Divider />
      <MessageInputField />
    </div>
  );
};

export default MessageContainer;

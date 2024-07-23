import useConversation from "../../zustand/useConversation";
import Divider from "../common/Divider";
import MessageContent from "./MessageContent";
import MessageHeader from "./MessageHeader";
import MessageInputField from "./MessageInputField";

const MessageContainer = () => {
  const { selectConversation } = useConversation();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      <MessageHeader selectConversation={selectConversation} />
      <Divider />
      <MessageContent />
      {!!selectConversation && <Divider />}
      {!!selectConversation && <MessageInputField />}
    </div>
  );
};

export default MessageContainer;

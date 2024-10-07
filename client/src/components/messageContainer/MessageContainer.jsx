import useConversation from "../../zustand/useConversation";
import Divider from "../common/Divider";
import MessageContent from "./MessageContent";
import MessageHeader from "./MessageHeader";
import MessageInputField from "./MessageInputField";

const MessageContainer = () => {
  const { selectConversation } = useConversation();

  return (
    <div className="h-full">
      <div className="">
        <MessageHeader selectConversation={selectConversation} />
        <Divider />
        <div className="overflow-y-auto overflow-hidden h-[47rem]">
          <MessageContent />
        </div>
      </div>
      <div className="">
        {!!selectConversation && <Divider />}
        {!!selectConversation && <MessageInputField />}
      </div>
    </div>
  );
};

export default MessageContainer;

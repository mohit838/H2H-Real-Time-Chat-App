import { useGetConversations } from "../../hooks/useGetConversations";
import LoadingSpin from "../common/LoadingSpin";
import ConversationPeople from "./ConversationPeople";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 mt-4 flex flex-col overflow-auto">
      {loading ? (
        <>
          <LoadingSpin />
        </>
      ) : (
        !!conversations?.length &&
        conversations?.map((item) => (
          <>
            <ConversationPeople key={item._id} item={item} />
          </>
        ))
      )}
    </div>
  );
};

export default Conversations;

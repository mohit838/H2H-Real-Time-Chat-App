import PropTypes from "prop-types";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const ConversationPeople = ({ item }) => {
  const { selectConversation, setSelectConversation } = useConversation();
  const isSelected = selectConversation?._id === item?._id;

  const { onlineUser } = useSocketContext();

  const isOnline = onlineUser.includes(item?._id);

  return (
    <>
      <div
        className={`flex items-center gap-2 hover:bg-gray-900 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-slate-900" : ""
        }`}
        onClick={() => {
          setSelectConversation(item);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={item?.profilePic} alt={`${item?.userName}-avatar`} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="font-sans">{item?.userName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0" />
    </>
  );
};

ConversationPeople.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired,
};

export default ConversationPeople;

import PropTypes from "prop-types";

const MessageHeader = ({ selectConversation }) => {
  return (
    <div className="h-12 text-xl font-bold">{selectConversation?.fullName}</div>
  );
};

export default MessageHeader;

MessageHeader.propTypes = {
  selectConversation: PropTypes.shape({
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

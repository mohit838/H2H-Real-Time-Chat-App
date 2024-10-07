import PropTypes from "prop-types";

const MessageHeader = ({ selectConversation }) => {
  return (
    <div className="text-4xl font-bold">
      {selectConversation?.fullName ?? "No Chat Selected!!"}
    </div>
  );
};

export default MessageHeader;

MessageHeader.propTypes = {
  selectConversation: PropTypes.shape({
    fullName: PropTypes.string,
  }),
};

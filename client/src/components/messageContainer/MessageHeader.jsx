import PropTypes from "prop-types";

const MessageHeader = ({ selectConversation }) => {
  return (
    <div className="h-12 text-xl font-bold">
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

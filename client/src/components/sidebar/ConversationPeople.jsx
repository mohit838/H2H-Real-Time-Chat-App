const ConversationPeople = () => {
  return (
    <>
      <div className="flex items-center gap-2 hover:bg-gray-900 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=ace` ||
        `https://i.pravatar.cc/300"
              alt="user-avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="font-sans">{"user name"}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h1" />
    </>
  );
};

export default ConversationPeople;

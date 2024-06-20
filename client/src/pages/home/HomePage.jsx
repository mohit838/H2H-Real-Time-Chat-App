import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="bg-black/90 h-full w-full p-4 flex">
      <div className="w-1/4 p-4">
        <Sidebar />
      </div>

      <div className="divider h-full px-[2px] bg-gray-900 h2h-divider"></div>

      <div className="w-3/4 p-4">
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;

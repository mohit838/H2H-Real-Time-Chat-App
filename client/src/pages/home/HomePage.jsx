import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-5 h-screen">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 h-full">
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;

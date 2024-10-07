import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-2 h-screen">
      <div className="col-span-full lg:col-span-3 xl:col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-full lg:col-span-9 xl:col-span-10 h-full">
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;

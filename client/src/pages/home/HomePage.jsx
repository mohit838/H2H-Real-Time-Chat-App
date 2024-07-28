import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="h-full w-full flex max-md:flex-col">
      {/* <div className="bg-black/90 h-full w-full p-4 flex"></div> */}
      <div className="max-md:w-full w-1/4 p-4">
        <Sidebar />
      </div>

      {/* <Divider /> */}

      <div className="max-md:w-full w-3/4 p-4">
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;

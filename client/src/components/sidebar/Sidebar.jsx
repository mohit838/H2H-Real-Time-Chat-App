import Divider from "../common/Divider";
import LogoutBtn from "../common/LogoutBtn";
import Conversations from "./Conversations";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div className="p-4 flex flex-col">
      <SearchBar />
      <Divider />
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;

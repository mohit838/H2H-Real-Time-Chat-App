import Divider from "../common/Divider";
import LogoutBtn from "../common/LogoutBtn";
import SiteLogo from "../common/SiteLogo";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="p-4 flex flex-col">
      {/* Logo */}
      <SiteLogo />

      {/* <SearchBar /> */}
      <Divider />
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;

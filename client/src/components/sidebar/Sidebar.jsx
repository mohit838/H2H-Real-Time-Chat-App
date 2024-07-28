import LogoutBtn from "../common/LogoutBtn";
import SiteLogo from "../common/SiteLogo";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-w-1/4">
      {/* Logo */}
      <SiteLogo />

      {/* <SearchBar /> */}
      {/* <Divider /> */}
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;

import LogoutBtn from "../common/LogoutBtn";
import SiteLogo from "../common/SiteLogo";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-between lg:border-r-2 border-[#3c3c3c] h-full">
      <div className="w-full">
        <SiteLogo />
        <Conversations />
      </div>
      <div className="w-full p-4 shadow-2xl border-2 rounded-lg border-black/10">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Sidebar;

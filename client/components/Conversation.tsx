import { ToggleProps } from "@/types";
import classNames from "classnames";
import ConversationsList from "./ConversationsList";
import Search from "./components/Search";
import Toggle from "./components/Toggle";
type PropTypes = ToggleProps;

const Conversation = ({ sidebar, toggleSidebar }: PropTypes) => {
  return (
    <div
      className={classNames(
        "absolute w-full lg:w-[320px] h-screen left-0 top-0 bottom-0 bg-[#1F1D1D] z-10",
        {
          "hidden lg:block": sidebar,
        }
      )}
    >
      <div className="ml-4 mt-3">
        <Toggle toggleSidebar={toggleSidebar} />
      </div>
      <Search />
      <ConversationsList />
    </div>
  );
};

export default Conversation;

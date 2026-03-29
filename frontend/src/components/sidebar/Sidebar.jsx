import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500/30 p-4 flex flex-col w-64 md:w-80 h-full">
            <SearchInput />
            <div className="divider px-3 border-gray-600 my-2"></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;

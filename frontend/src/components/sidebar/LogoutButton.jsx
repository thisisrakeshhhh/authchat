import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className="mt-auto px-2 pt-2 pb-1">
            <BiLogOut 
                className="w-7 h-7 text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors drop-shadow-md" 
                title="Logout" 
            />
        </div>
    );
};

export default LogoutButton;

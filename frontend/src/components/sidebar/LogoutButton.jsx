import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout.js";

const LogoutButton = () => {
    const {loading, logout} = useLogout();

    return (
        <div className="mt-auto px-2 pt-2 pb-1">
            {!loading ? (
                <BiLogOut 
                className="w-7 h-7 text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors drop-shadow-md" 
                title="Logout" 
                onClick={logout}
                disabled={loading}
            />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};

export default LogoutButton;

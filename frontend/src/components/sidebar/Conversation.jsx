import { Link } from "react-router-dom";

// Props concept: We use destructuring to pull specific values out of the `props` object passed from the parent.
const Conversation = ({ contactName, isSelected, iconPath, isLast }) => {
    return (
        <>
            <Link to={`/chat/${contactName}`} className={`flex gap-3 items-center hover:bg-cyan-500/20 rounded-lg p-2 py-3 cursor-pointer transition-colors ${isSelected ? "bg-cyan-500/80 shadow-inner" : ""}`}>
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full border border-gray-100/20 shadow-md">
                        {/* We use online avatars for dummy UI visualization */}
                        <img src={`https://avatar.iran.liara.run/public/${contactName.length % 2 === 0 ? 'boy' : 'girl'}?username=${contactName}`} alt="User Avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center">
                        <p className={`font-semibold tracking-wide ${isSelected ? "text-white" : "text-gray-200"}`}>{contactName}</p>
                        {iconPath && <span className="text-xl">{iconPath}</span>}
                    </div>
                </div>
            </Link>
            {!isLast && <div className="divider my-0 py-0 h-1 border-gray-600/30 opacity-30"></div>}
        </>
    );
};

export default Conversation;

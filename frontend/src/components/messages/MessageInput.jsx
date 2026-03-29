import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form className="px-6 my-4 mt-auto">
            <div className="w-full relative shadow-lg rounded-xl overflow-hidden group">
                <input 
                    type="text" 
                    className="border-none text-sm block w-full p-4 bg-slate-800/60 text-white placeholder-gray-400 focus:outline-none focus:bg-slate-800/80 transition-all backdrop-blur-sm" 
                    placeholder="Send a message" 
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-5 text-gray-400 hover:text-cyan-400 transition-colors">
                    <BsSend className="w-5 h-5 drop-shadow-md" />
                </button>
            </div>
        </form>
    );
};

export default MessageInput;

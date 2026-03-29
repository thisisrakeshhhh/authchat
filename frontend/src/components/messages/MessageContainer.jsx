import { useParams } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageContainer = () => {
    // Read the username from the URL router
    const { username } = useParams();
    const noChatSelected = !username; 

    return (
        <div className="md:min-w-[450px] lg:min-w-[550px] flex flex-col bg-slate-900/30 w-full h-full relative border-l border-white/5 shadow-2xl">
            {noChatSelected ? (
                <div className="flex items-center justify-center w-full h-full text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex-col gap-2">
                    <p className="tracking-wide">Welcome 👋 Zoe Jones ❄️</p>
                    <p className="tracking-wide">Select a chat to start messaging</p>
                    <TiMessages className="text-3xl md:text-6xl text-center mt-2" />
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div className="bg-slate-800/60 px-6 py-4 mb-2 shadow-md backdrop-blur-md flex items-center gap-2 sticky top-0 z-10">
                        <span className="text-gray-400 font-medium tracking-wide text-sm">To:</span> 
                        <span className="text-gray-100 font-bold tracking-wide text-lg drop-shadow-sm">{username}</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

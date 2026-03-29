const Message = ({ fromMe, message, time }) => {
    // Condition to differentiate sent vs received
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    
    // Tailwind styles specific to sent vs received
    const bubbleBgColor = fromMe ? "bg-cyan-500 shadow-cyan-500/20" : "bg-slate-700/80 shadow-black/20";
    const textColor = fromMe ? "text-white" : "text-gray-200";
    
    return (
        <div className={`chat ${chatClassName} drop-shadow-md mb-2`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-gray-100/10 shadow-sm">
                    {/* Different avatars based on sender/receiver */}
                    <img 
                        alt="Chat bubble component" 
                        src={fromMe ? "https://avatar.iran.liara.run/public/girl?username=me" : "https://avatar.iran.liara.run/public/boy?username=sam"} 
                    />
                </div>
            </div>
            <div className={`chat-bubble shadow-md ${bubbleBgColor} ${textColor}`}>
                {message}
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center mt-1 text-gray-300">
                {time}
            </div>
        </div>
    );
};

export default Message;

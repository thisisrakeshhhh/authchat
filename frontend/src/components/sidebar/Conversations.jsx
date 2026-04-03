import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversation.js";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
    // Array Map concept: Instead of copying <Conversation /> 5 times, we map over dummy data to render them dynamically.
    const {loading, conversations} = useGetConversations();
    console.log("conversations", conversations);

    return (
        <div className="py-2 flex flex-col overflow-auto scrollbar-hide flex-1 space-y-1">
            {conversations.map((conversation, idx) => (
                <Conversation 
                    key={conversation._id} 
                    conversation={conversation} 
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? <div className="flex justify-center items-center"></div> : null}
        </div>
    );
};

export default Conversations;

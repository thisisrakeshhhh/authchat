import Conversation from "./Conversation";
import { useParams } from "react-router-dom";

const Conversations = () => {
    // Array Map concept: Instead of copying <Conversation /> 5 times, we map over dummy data to render them dynamically.
    const fakeContacts = [
        { name: "Sam Edwards", icon: "🏂", selected: true },
        { name: "Rebecca Barker", icon: "⚽", selected: false },
        { name: "Alyssa Davis", icon: "🎱", selected: false },
        { name: "Jack John", icon: "👾", selected: false },
        { name: "Felix Forbes", icon: "🐝", selected: false },
    ];

    const { username } = useParams();

    return (
        <div className="py-2 flex flex-col overflow-auto scrollbar-hide flex-1 space-y-1">
            {fakeContacts.map((contact, idx) => (
                <Conversation 
                    key={contact.name} 
                    contactName={contact.name} 
                    iconPath={contact.icon}
                    isSelected={username === contact.name}
                    isLast={idx === fakeContacts.length - 1}
                />
            ))}
        </div>
    );
};

export default Conversations;

import Message from "./Message";

const Messages = () => {
    return (
        <div className="px-6 py-2 flex-1 overflow-auto scrollbar-hide space-y-4">
            <Message fromMe={true} message="hi sam!" time="20:46" />
            <Message fromMe={false} message="hi Zoe!" time="20:50" />
            <Message fromMe={true} message="how's it going?" time="20:51" />
            <Message fromMe={true} message="long time no see!" time="20:51" />
            <Message fromMe={false} message="yes exactly!" time="18:24" />
        </div>
    );
};

export default Messages;

import {useEffect} from "react";
import useConversation from "../zustand/useConversation.js";
import { useSocketContext } from "../context/SocketContext.jsx";
import notificationSound from "../assets/sounds/notification.mp3";


const useListenMessages = () => {
	const {socket} = useSocketContext();
	const {messages, setMessages} = useConversation();

	useEffect(() => {
		socket?.on("newMessage",(newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages((prevMessages) => [...prevMessages, newMessage]);
	})
	return () => socket?.off("newMessage");//loop breaker
	},[socket, setMessages])
}
export default useListenMessages;
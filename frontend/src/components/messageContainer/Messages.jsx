import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <div className="px-4 flex-1 overflow-y-auto">
      {loading && Array(3).fill(null).map((_, idx) => <MessageSkeleton key={idx}/>) }
      {!loading && messages.length == 0 && (
        <p className="text-center">Envie uma mensagem para iniciar a conversa!</p>
      )}
      {!loading && messages.length > 0 && messages.map(message => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
    </div>
  )
}

export default Messages;
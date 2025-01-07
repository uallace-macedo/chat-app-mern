import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const {messages, loading} = useGetMessages();

  return (
    <div className="px-4 flex-1 overflow-y-auto">
      {loading && Array(3).fill(null).map((_, idx) => <MessageSkeleton key={idx}/>) }
      {!loading && messages.length == 0 && (
        <p className="text-center">Envie uma mensagem para iniciar a conversa!</p>
      )}
      {!loading && messages.map(msg => (
        <Message key={msg._id} message={msg.message} createdAt={msg.createdAt} senderId={msg.senderId} />
      ))}
    </div>
  )
}

export default Messages;
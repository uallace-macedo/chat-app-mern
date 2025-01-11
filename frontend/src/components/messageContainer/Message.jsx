import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  console.log('MESSAGE', message);
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  const userSend = authUser._id === message.senderId;
  const bubbleBgColor = userSend ? 'bg-orange-700' : '';
  const formattedTime = extractTime(message.createdAt);

  const profilePic = userSend ? authUser.profilePic : selectedConversation.profilePic;
  return (
    <div className={`chat ${userSend ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message;
import { FaRegUserCircle } from "react-icons/fa";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <FaRegUserCircle className="w-9 h-8 text-slate-800"/>
        </div>
      </div>
      <div className={`chat-bubble text-white`}>Hi! Whasup?</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message;
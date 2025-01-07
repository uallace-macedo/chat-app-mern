import { useState } from 'react';
import useConversation from '../zustand/useConversation.js';
import toast from 'react-hot-toast';
import api from '../services/api.js';

const useSendMessage = () => {
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await api.post(`/messages/send/${selectedConversation._id}`, {message});
      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading, sendMessage
  }
}

export default useSendMessage;
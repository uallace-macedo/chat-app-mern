import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import api from "../services/api";

const useGetMessages = () => {
  const [loading, setLoading] = useState();
  const {messages, setMessages, selectedConversation} = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/messages/${selectedConversation._id}`);
        setMessages(res.data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    if(selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);


  return {
    loading, messages
  }
}

export default useGetMessages;
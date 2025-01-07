import { useEffect, useState } from "react";
import api from "../services/api";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await api.get('/users');
        setConversations(response.data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    getConversations();
  }, []);

  return {
    loading,
    conversations
  }
}

export default useGetConversations;
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import api from '../services/api';
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', data);
      localStorage.setItem('chat-user', JSON.stringify(response.data));
      setAuthUser(response.data);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    login
  }
};

export default useLogin;
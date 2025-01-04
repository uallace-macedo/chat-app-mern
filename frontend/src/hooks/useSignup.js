import { useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async (data) => {
    const success = handleInputErrors(data);
    if(!success) return;

    setLoading(true);
    try {
      const response = await api.post('/auth/signup', data);
      localStorage.setItem('chat-user', JSON.stringify(response.data));
      setAuthUser(response.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    signup,
    loading
  }
}

export default useSignup;

const handleInputErrors = (data) => {
  let hasCompleteData = !Object.entries(data).some(([key, value]) => value == null || value.trim() === '');
  if(!hasCompleteData) {
    toast.error('Por favor, preencha todos os campos!');
    return false;
  }

  if(data.password !== data.confirmPassword) {
    toast.error('As senhas não combinam!');
    return false;
  }
  
  if(data.password.length < 8) {
    toast.error('As senha precisa ter pelo menos 8 caracteres!');
    return false;
  }

  return true;
}
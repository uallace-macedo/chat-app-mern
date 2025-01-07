import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const {register, handleSubmit, setValue } = useForm();

  const onSubmitData = (data) => {
    if(!data.search) return;
    if(data.search.length < 3) return toast.error('Busca precisa ter pelo menos 3 caracteres');
    const conversation = conversations.find(e => e.fullName.toLowerCase().includes(data.search.toLowerCase().trim()));
    if(conversation) {
      setSelectedConversation(conversation);
      setValue('search', '');
      return;
    }

    toast.error('Nenhum usuário encontrado!');
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit(onSubmitData)}>
      <input {...register('search')} type="text" placeholder="Buscar" className="input input-bordered rounded-full" />
      <button type="submit" className="btn btn-circle bg-orange-800 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput;
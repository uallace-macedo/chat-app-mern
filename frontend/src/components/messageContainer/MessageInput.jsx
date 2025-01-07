import { BsSend } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { loading, sendMessage } = useSendMessage();
  
  const onSubmitData = async (data) => {
    if(!data.message) return;
    await sendMessage(data.message);
    setValue('message', '');
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit(onSubmitData)}>
      <div className="w-full relative">
        <input type="text"
          {...register('message')}
          className="border text-xs rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Envie uma mensagem"
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput;
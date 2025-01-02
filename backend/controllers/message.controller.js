import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const getMessages = async (req, res) => {
  try {
    const { id: chattingTo } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chattingTo] }
    }).populate('messages');

    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);

  } catch (error) {
    console.error(`> ERRO (getMessagesController): Erro ao buscar mensagens. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId]}
    });

    if(!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      })
    };

    const newMessage = Message({
      senderId,
      receiverId,
      message
    });

    if(newMessage) conversation.messages.push(newMessage._id);
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(`> ERRO (sendMessageController): Erro ao enviar mensagem. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
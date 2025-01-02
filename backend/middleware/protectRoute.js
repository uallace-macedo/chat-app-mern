import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if(!token) return res.status(401).json({ error: 'Não autorizado! - Nenhum token fornecido' });

    const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
    if(!decoded) return res.status(401).json({ error: 'Não autorizado! - Token inválido' });

    const user = await User.findById(decoded.userId).select('-password');
    if(!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    req.user = user;
    next();
  } catch (error) {
    console.error(`> ERRO (sendMessageController): Erro ao enviar mensagem. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default protectRoute;
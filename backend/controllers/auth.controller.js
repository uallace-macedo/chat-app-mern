import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { ENV_VARS } from '../config/envVars.js';
import generateToken from '../utils/generateToken.js';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if(password !== confirmPassword) return res.status(400).json({ error: 'Senhas não combinam.' });
    
    const user = await User.findOne({ username });
    if(user) return res.status(400).json({ error: 'Usuário já existe.' });

    const salt = await bcrypt.genSalt(parseInt(ENV_VARS.PASS_SALT));
    const hashPass = await bcrypt.hash(password, salt);

    const profilePic = `https://avatar.iran.liara.run/public/${gender == 'male' ? 'boy' : 'girl'}?username=${username}`;
    
    const newUser = new User({
      fullName, username, password: hashPass, gender, profilePic
    });
    
    await newUser.save();
    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic
    });
  } catch (error) {
    console.error(`> ERRO (signupController): Erro ao criar novo usuário. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const correctPass = await bcrypt.compare(password, user?.password || '');

    if(!user || !correctPass) return res.status(403).json({ error: 'Credenciais inválidas!' });

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    });
  } catch (error) {
    console.error(`> ERRO (loginController): Erro ao logar. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Deslogou com sucesso!' });
  } catch (error) {
    console.error(`> ERRO (logoutController): Erro ao deslogar. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';
import 'dotenv/config';

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {
    expiresIn: '1d'
  });

  res.cookie('jwt', token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV == 'devolpment' ? false : true,
    sameSite: true,
  });
};

export default generateToken;
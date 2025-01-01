import { ENV_VARS } from '../config/envVars.js';
import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(ENV_VARS.MONGO_DB_URI);
    console.log('> MongoDB conectado.');
  } catch (error) {
    console.log('> Erro na conexão com o MongoDB.', error.message);
  }
}

export default connectToMongoDB;
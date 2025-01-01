import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const ENV_VARS = {
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  SERVER_PORT: process.env.SERVER_PORT,
  PASS_SALT: process.env.PASS_SALT,
  JWT_SECRET: process.env.JWT_SECRET,
};
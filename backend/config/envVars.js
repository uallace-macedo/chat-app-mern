import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const ENV_VARS = {
  SERVER_PORT: process.env.SERVER_PORT
};
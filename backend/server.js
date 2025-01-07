import express from 'express';
import { ENV_VARS } from './config/envVars.js';
import router from './routes/index.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));
app.use(cookieParser());
app.use(router);

app.listen(ENV_VARS.SERVER_PORT, () => {
  console.log(`> Running as: http://localhost:${ENV_VARS.SERVER_PORT}.`);
  connectToMongoDB();
});
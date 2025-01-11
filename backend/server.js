import path from 'path';
import express from 'express';
import { ENV_VARS } from './config/envVars.js';
import router from './routes/index.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './socket/socket.js';

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));
app.use(cookieParser());
app.use(router);

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
})

server.listen(ENV_VARS.SERVER_PORT, () => {
  console.log(`> Running as: http://localhost:${ENV_VARS.SERVER_PORT}.`);
  connectToMongoDB();
});
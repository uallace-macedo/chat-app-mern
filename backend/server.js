import express from 'express';
import { ENV_VARS } from './config/envVars.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello, world!!' });
});

app.listen(ENV_VARS.SERVER_PORT, () => (
  console.log(`Running as: http://localhost:${ENV_VARS.SERVER_PORT}`)
));
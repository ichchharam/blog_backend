import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  mongoURL: process.env.MONGO_URL,
  port: process.env.PORT,
}));

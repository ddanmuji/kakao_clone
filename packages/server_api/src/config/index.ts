import dotenv from 'dotenv';

dotenv.config();

export const { PORT, ORIGIN, NODE_ENV, SESSION_SECRET_KEY } = process.env;

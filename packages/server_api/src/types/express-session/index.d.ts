import { SessionData } from 'express-session';

declare module 'express-session' {
  interface SessionData {
    isLogged: boolean;
    userId: string;
    userName: string;
  }
}

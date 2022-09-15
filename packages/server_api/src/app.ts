import express, { Application } from 'express';
import session, { SessionOptions } from 'express-session';
import fileStore from 'session-file-store';
import morgan from 'morgan';

import * as ENV from './config';
import * as router from './routes';
import sequelize from './sequelize';

const FileStore = fileStore(session);

class Server {
  private app: Application;
  private prod: boolean;
  private sessionMiddleware;

  constructor() {
    const app: Application = express();
    const prod = ENV.NODE_ENV === 'production';
    const sessionOptions: SessionOptions = {
      secret: ENV.SESSION_SECRET_KEY as string,
      saveUninitialized: true,
      cookie: { secure: false },
      resave: false,
      store: new FileStore(),
    };

    this.app = app;
    this.prod = prod;
    this.sessionMiddleware = session(sessionOptions);
  }

  private setApp() {
    this.app.set('port', this.prod ? ENV.PORT : '8000');
    sequelize.sync({ force: true });
  }

  private setRoute() {
    this.app.use('/chat', router.chat);
    this.app.use('/room', router.room);
    this.app.use('/user', router.user);
  }

  private setMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(this.prod ? morgan('combined') : morgan('dev'));
    this.app.use(this.sessionMiddleware);
    this.setRoute();
  }

  public listen() {
    this.setApp();
    this.setMiddleware();
    this.app.listen(this.app.get('port'), () =>
      console.log(`start to server: http://localhost:${this.app.get('port')}/`),
    );
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();

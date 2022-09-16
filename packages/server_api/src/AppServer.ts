import express, { Application, RequestHandler } from 'express';
import session, { SessionOptions } from 'express-session';
import fileStore from 'session-file-store';
import { createServer, Server } from 'http';
import SocketIO from 'socket.io';
import cors from 'cors';
import morgan from 'morgan';

import * as ENV from './config';
import * as router from './routes';
import sequelize from './sequelize';
import { SocketEvent } from './constants';

const FileStore = fileStore(session);

class AppServer {
  public static readonly PORT = <const>8000;
  private app: Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;
  private sessionMiddleware: RequestHandler;

  constructor() {
    const sessionOptions: SessionOptions = {
      secret: ENV.SESSION_SECRET_KEY as string,
      saveUninitialized: true,
      cookie: { secure: false },
      resave: false,
      store: new FileStore(),
    };

    this.app = express();
    this.server = createServer(this.app);
    this.io = new SocketIO.Server(this.server, {
      path: '/socket.io',
      cors: { origin: ENV.ORIGIN },
    });
    this.port = ENV.PORT || AppServer.PORT;
    this.sessionMiddleware = session(sessionOptions);
  }

  private config() {
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
    this.app.use(morgan('dev'));
    this.app.use(this.sessionMiddleware);
    this.app.use(
      cors({ origin: ENV.ORIGIN, methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }),
    );
    this.setRoute();
  }

  public listen() {
    this.config();
    this.setMiddleware();

    /** @description server listening on our defined port */
    this.server.listen(this.port, () =>
      console.log('start to server: http://localhost:%s/', this.port),
    );

    /** @description socket events */
    this.app.set('io', this.io);
    const chat = this.io.of('/chat');
    // const room = this.io.of('/room');

    this.io.use((socket, next) => {
      const req = socket.request;
      // @ts-ignore
      const res = socket.request.res || {};
      // @ts-ignore
      this.sessionMiddleware(req, res, next);
    });

    chat.on(SocketEvent.CONNECT, async () => {
      chat.on(SocketEvent.JOIN, (roomId) => {
        chat.socketsJoin(roomId);
      });

      chat.on(SocketEvent.DISCONNECT, () => {
        console.log('Disconnected to Room');
      });
    });

    // room.on(SocketEvent.CONNECT, (socket) => {
    //   console.log('Connected to Room', socket.id);

    //   room.on(SocketEvent.DISCONNECT, () => {
    //     console.log('Disconnected to Room');
    //   });
    // });
  }
}

export default AppServer;

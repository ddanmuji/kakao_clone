import AppServer from './src/AppServer';

const server = () => {
  const app = new AppServer();
  app.listen();
};

server();

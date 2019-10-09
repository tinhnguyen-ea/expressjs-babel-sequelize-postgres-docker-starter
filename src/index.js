import '@babel/polyfill';
import express from 'express';

const server = express();
const port = 3000;

const setupMiddleware = (server) => {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
};

setupMiddleware(server);

server.get('/', async (_, res) => {
  res.send('Hello World');
});

server.listen(port, () => {
  console.log(`Website is running.\nOpen http://localhost:${port}`);
});

export default server;

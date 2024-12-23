import express from 'express';
import http from 'http';
import ServerConfig  from './config/serverConfig';
import { Server } from 'socket.io'; 
import cors from 'cors';

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
});

server.listen(ServerConfig.PORT, () => {
  console.log('Server is running on port 5000');
});
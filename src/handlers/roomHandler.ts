import { Socket } from "socket.io";
import {v4 as UUIDv4} from 'uuid';
import IRoomParams from "../interfaces/IRoomParams";

const rooms : Record<string, string[]> = {};

const roomHandler = (socket: Socket) => {

    const createRoom = () => {
        const roomId = UUIDv4();

        socket.join(roomId);

        rooms[roomId] = [];

        socket.emit('room-created', {roomId});
        console.log('new room created', roomId);

    };

    const joinedRoom = ({roomId, peerId}: IRoomParams) => {
       if(rooms[roomId]) {
        console.log('New user has joined the room ', roomId, 'with peer id', peerId);
           rooms[roomId].push(peerId);
           socket.join(roomId);

           socket.on("ready", () => {
                socket.to(roomId).emit("user-joined", {peerId});
           });

           socket.emit("get-users", {
            roomId,
            participants: rooms[roomId]
           });
       }
    };

    socket.on('create-room', createRoom);
    socket.on('joined-room', joinedRoom);

};

export default roomHandler;
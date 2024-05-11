import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

const API_URL = "http://localhost:3000";

const socket = io(API_URL,{
    reconnection : true,
    reconnectionDelay : 2000,
    autoConnect : false,
    reconnectionAttempts : 10
});

export async function connectSocket(userId){
    socket.connect({
        query : {
            userId
        }
    });
    toast.success('Socket Connected');
}

export async function getSocket(userId){
    await connectSocket(userId);
    return socket;
}

export function disconnectSocket(){
    socket.disconnect();
    toast.warn('Socket Disconnected');
}

export function sendMessage(data){
    socket.emit('message',{
        userId : data.userId,
        message : data.message,
    });
}
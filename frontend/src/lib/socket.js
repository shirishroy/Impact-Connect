import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

const API_URL = "https://impactconnect-i5gi.onrender.com";

export let socket = io(API_URL,{
    reconnection : true,
    reconnectionDelay : 2000,
    autoConnect : false,
    reconnectionAttempts : 10
});

export async function connectSocket(userId){
    if(userId){
        // console.log(userId);
        socket = io(API_URL,{
            reconnection : true,
            reconnectionDelay : 2000,
            autoConnect : true,
            reconnectionAttempts : 10,
            query : {
                userId
            }
        });
        toast.success('Socket Connected');
    }
}

export async function getSocket(){
    return socket;
}

export function disconnectSocket(){
    if(socket.connected){
        socket.disconnect();
        toast.warn('Socket Disconnected');
    }
}

export function sendMessage(data){
    socket.emit('message',{
        userId : data.userId,
        message : data.message,
    });
}
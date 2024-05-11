import { useEffect } from "react";
import { useSelector } from "react-redux";
import { connectSocket, disconnectSocket, getSocket } from "../lib/socket";

export default function Chat() {

    // const chats = useSelector(state => state.chat.chats);
    // const userId = useSelector(state => state.user._id);
    // const userId = '1234';

    // useEffect(()=>{
    //     const socket = getSocket(userId);

    //     return ()=>{
    //         disconnectSocket();
    //     }
    // },[]);

    return <>
    Hello
    </>

}
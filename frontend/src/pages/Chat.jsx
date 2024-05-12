import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connectSocket, disconnectSocket, getSocket, socket } from "../lib/socket";
import { toast } from "react-toastify";
import Navbar from "@/components/Navbar/Navbar";
import { dataActions } from "@/store/data-slice";
import { io } from "socket.io-client";

export default function Chat() {
    const dispatch = useDispatch();
    const chats = useSelector(state => state.data.chats);
    const currentChat = useSelector(state => state.data.currentChat);
    const user = useSelector(state => state.data.user);
    const navigate = useNavigate();
    const [currentChatSender, setCurrentChatSender] = useState(null);
    const [msg,setMsg] = useState('');

    useEffect(()=>{
        if(currentChat){
            let otherUser = null;
            if( currentChat?.userIds[0]._id === user._id){
                otherUser = currentChat?.userIds[1];
            }
            else{
                otherUser = currentChat?.userIds[0];
            }
            setCurrentChatSender(otherUser.name);
        }
        console.log(currentChat);
    },[currentChat])

    useEffect(()=>{
        if(!user){
            navigate('/');
            toast.warn("Please Login to continue");
        }
    },[]);

    function sendMessage(message){

        socket.emit('message',{
            senderId : user._id,
            to : currentChat.userIds[0]._id === user._id ? currentChat.userIds[1]._id : currentChat.userIds[0]._id,
            chatId : currentChat._id,
            message
        })
        dispatch(dataActions.addMessage({ message : {
            senderId : user._id,
            message
        } , chatId : currentChat._id}));

    }

    useEffect(()=>{
        if(user){
            connectSocket(user._id);

            socket.on('message',(data)=>{
                console.log(data);
                dispatch(dataActions.addMessage({ message : {
                    senderId : data.senderId,
                    message : data.message
                } , chatId : data.chatId}));
            });
            socket.on('new-chat',(data)=>{

            });

            return ()=>{
                socket.off('message');
                socket.off('new-chat');
                disconnectSocket(user._id);            
            }
        }
    },[user]);


    useEffect(()=>{
        // console.log(chats);

    }, [chats]);

    return <>
        <Navbar />
        <div>
            {
                chats && chats?.map((chat, index) => {
                    let otherUser = null;
                    if( chat.userIds[0]._id === user._id){
                        otherUser = chat.userIds[1];
                    }
                    else{
                        otherUser = chat.userIds[0];
                    }
                    // console.log(otherUser)
                    return <div key={index} className="p-4 border-b-2 cursor-pointer" onClick={()=>{
                        dispatch(dataActions.setCurrentChat({ chat }));
                    }}>
                        {otherUser?.name} {chat._id === currentChat?._id ? "🗨" : ""}
                    </div>
                })
            }
            {
                currentChat && <div>
                    <div>{currentChatSender}</div>
                    <div>
                        {                        
                            currentChat?.messages?.map((message,index)=>{
                                
                                if(message.senderId === user._id){

                                    return <div className="text-right" key={index}>
                                            <div>You</div>
                                            <div className="text-right">{message.message}</div>
                                        </div>
                                }
                                else{
                                    return <div className="text-left" key={index}>
                                        <div>{currentChatSender}</div>
                                        <div className="text-left">{message.message}</div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <input type="text" placeholder="Type a message" value={msg} 
                    onChange={(e)=>{
                        setMsg(e.target.value);
                    }}
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            e.preventDefault();
                            sendMessage(e.target.value);
                            setMsg('');
                        }
                    }} 
                    />
                </div>
            }
        </div>
    </>
}
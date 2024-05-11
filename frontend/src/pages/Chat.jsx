import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connectSocket, disconnectSocket, getSocket } from "../lib/socket";
import { toast } from "react-toastify";

export default function Chat() {
    const dispatch = useDispatch();
    const chats = useSelector(state => state.data.chats);
    const user = useSelector(state => state.data.user);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/');
            toast.warn("Please Login to continue");
        }
    },[]);

    return <>
    
    </>

}
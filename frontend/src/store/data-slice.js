import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : "data",
    initialState : {
        chats : null,
        currentChat : null,
        loggedIn : false,
        user : null,
        value : 0,
        campaigns : null,
    },
    reducers : {
        setChats(state, action){
            const newState = {
                ...state,
                chats : action.payload.chats
            }
            return newState;
        },
        setUser(state, action){
            const newState = {
                ...state,
                user : action.payload.value
            }
            return newState;
        },
        setLoggedIn(state, action){
            const newState = {
                ...state,
                loggedIn : action.payload.value
            }
            return newState;
        },
        setValue(state, action){
            const newState = {
                ...state,
                value : action.payload.val
            }
            return newState;
        },
        setCampaigns(state, action){
            const newState = {
                ...state,
                campaigns : action.payload.campaigns
            }
            return newState;
        },
        addNewChat(state, action){
            let chats = [...state.chats, action.payload.chat]
            const newState = {
                ...state,
                chats
            }
            return newState;
        },
        setCurrentChat(state, action){
            const newState = {
                ...state,
                currentChat : action.payload.chat
            }
            return newState;
        },
        addMessage(state, action){
            const { chatId, message } = action.payload;
            let newCurrentChat = null;
            const newChats = state.chats.map(chat => {
                if (chat._id === chatId) {
                    newCurrentChat = {
                        ...chat,
                        messages: [...chat.messages, message]
                    };
                    return newCurrentChat;
                }
                return chat;
            });
            const newState = {
                ...state,
                chats : newChats,
                currentChat : newCurrentChat
            }
            return newState;
        },
        updateCampaign(state, action){
            const { campaign } = action.payload;
            const newCampaigns = state.campaigns.map(camp => {
                if (camp._id === campaign._id) {
                    return campaign;
                }
                return camp;
            });
            const newState = {
                ...state,
                campaigns : newCampaigns
            }
            return newState;
        }
    }
});

export default dataSlice;
export const dataActions = dataSlice.actions;

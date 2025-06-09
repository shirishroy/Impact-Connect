import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        chats: [],
        currentChat: null,
        loggedIn: false,
        user: null,
        value: 0,
        campaigns: [],  // ✅ Changed from `null` to `[]`
    },
    reducers: {
        setChats(state, action) {
            state.chats = action.payload.chats;
        },
        setUser(state, action) {
            state.user = action.payload.value;
        },
        setLoggedIn(state, action) {
            state.loggedIn = action.payload.value;
        },
        setValue(state, action) {
            state.value = action.payload.val;
        },
        setCampaigns(state, action) {  
            state.campaigns = Array.isArray(action.payload.campaigns) ? action.payload.campaigns : [];  // ✅ Ensure campaigns is always an array
        },
        addNewChat(state, action) {
            state.chats.push(action.payload.chat);
        },
        setCurrentChat(state, action) {
            state.currentChat = action.payload.chat;
        },
        addMessage(state, action) {
            const { chatId, message } = action.payload;
            state.chats = state.chats.map(chat => {
                if (chat._id === chatId) {
                    return {
                        ...chat,
                        messages: [...chat.messages, message]
                    };
                }
                return chat;
            });
        },
        updateCampaign(state, action) {
            const { campaign } = action.payload;
            state.campaigns = state.campaigns.map(camp =>
                camp._id === campaign._id ? campaign : camp
            );
        }
    }
});

export default dataSlice;
export const dataActions = dataSlice.actions;

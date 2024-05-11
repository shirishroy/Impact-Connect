import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : "data",
    initialState : {
        chats : [],
        loggedIn : false,
        user : null,
        value : 0
    },
    reducers : {
        setChats(state, action){
            const newState = {
                ...state,
                chats : action.payload.value
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
        }
    }
});

export default dataSlice;
export const dataActions = dataSlice.actions;

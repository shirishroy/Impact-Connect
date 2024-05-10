import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name : "ui",
    initialState : {
        loading : true,

    },
    reducers : {
        setLoading(state,action){
            const newState = {
                ...state,
                loading : action.payload.value
            }
            return newState
        }
    }
});

export default uiSlice;
export const uiActions = uiSlice.actions;
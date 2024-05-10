import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import dataSlice from './data-slice';

export const store = configureStore({
    reducer : {
        ui : uiSlice.reducer,
        data : dataSlice.reducer 
    }
});

export default store;
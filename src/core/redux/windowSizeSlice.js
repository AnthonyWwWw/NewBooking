import { createSlice } from "@reduxjs/toolkit";

export const windowSizeSlice = createSlice({
    name: 'windowSize',
    initialState: window.innerWidth,
    reducers: {
        checkingDisplaySize: (state, action) => {
            return action.payload;
        }
    }
})

export const {checkingDisplaySize} = windowSizeSlice.actions;
export default windowSizeSlice;

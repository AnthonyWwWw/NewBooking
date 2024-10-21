import { createSlice } from "@reduxjs/toolkit";

export const toggleBurgerMenuSlice = createSlice({
    name: "toggleBurgerMenu",
    initialState: false,
    reducers: {
        toggleBurgerMenu: (state, action) => {
            return action.payload;
        }
    }
})

export const {toggleBurgerMenu} = toggleBurgerMenuSlice.actions;
export default toggleBurgerMenuSlice;
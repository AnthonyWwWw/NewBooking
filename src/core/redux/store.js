import { configureStore } from '@reduxjs/toolkit';
import { windowSizeSlice } from './windowSizeSlice';
import { toggleBurgerMenuSlice } from "./toggleBurgerMenuSlice";


export const store = configureStore({
    reducer: {
        windowSize: windowSizeSlice.reducer,
        toggleBurgerMenu: toggleBurgerMenuSlice.reducer,
    }
})

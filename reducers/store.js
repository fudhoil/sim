import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login_reducer";

const store = configureStore({
    reducer: {
        login: loginSlice,
    }
});

export default store;
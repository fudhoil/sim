import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    status: "idle",
    error: null,
}

export const loginAsync = createAsyncThunk(
    "login/login",
    async (data, thunkAPI) => {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        if (response.ok) {
            return json;
        }
        else {
            return thunkAPI.rejectWithValue(json);
        }
    }
);

export const logoutAsync = createAsyncThunk(
    "login/logout",
    async (data, thunkAPI) => {
        const response = await fetch("http://localhost:3000/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        if (response.ok) {
            return json;
        }
        else {
            return thunkAPI.rejectWithValue(json);
        }
    }
);


// @ts-ignore
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        isLoggedIn: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: {
        // @ts-ignore
        [loginAsync.pending]: (state, action) => {
            state.status = "loading";
        },
        // @ts-ignore
        [loginAsync.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
            state.error = null;
        },
        // @ts-ignore
        [loginAsync.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
        // @ts-ignore
        [logoutAsync.pending]: (state, action) => {
            state.status = "loading";
        },
        // @ts-ignore
        [logoutAsync.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.user = null;
        },
        // @ts-ignore
        [logoutAsync.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        }
    }
})

export const { isLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
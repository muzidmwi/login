import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  userInfo: {
    userId: "",
    userPwd: "",
  },
};

export const userSlice = createSlice({
    name:name,
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo.userId = action.payload.id
            state.userInfo.userPwd = action.payload.userPwd
        }
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState)
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer
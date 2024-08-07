import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import axios from "axios";

const name = "UserSlice";

const initialState = {
  userInfo: {
    userId: "",
    userPwd: "",
    token: "",
    expiration: null,
  },
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ userId, userPwd }) => {
    const response = await axios.post('/api/login', { userId, userPwd });
    return response.data;
  }
);

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    clearUser: (state) => {
      state.userInfo = {
        userId: "",
        userPwd: "",
        token: "",
        expiration: null,
      };
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { userId, token, expiration } = action.payload;
        state.userInfo.userId = userId;
        state.userInfo.userPwd = ""; // 비밀번호는 상태에 저장하지 않음
        state.userInfo.token = token;
        state.userInfo.expiration = expiration;
        state.isAuthenticated = true;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(PURGE, () => initialState);
  },
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;

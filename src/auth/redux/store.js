import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage 사용
import userReducer from "./Slice/userSlice"


const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // auth 상태만 localStorage에 저장
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
//rootReducer와 persist를 묶어서 사용
//redux-persist를 사용해서 로컬스토리지에 state저장하면 페이지가 새로고침 되어도 initialState 값이
//로컬스토리지에 저장된 state값으로 대체되기 때문에 초기화되지 않는다.


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //직렬화 안하겠다 설정
    }),
});

export default store;

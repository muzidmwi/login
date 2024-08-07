import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserInput from "../components/UserInput";
import UserButton from "../components/UserButton";
import { loginUser, clearUser } from "../auth/redux/Slice/userSlice";
import { persistor } from "../index";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      dispatch(loginUser({ userId: email, userPwd: password }));
    } else {
      alert("이메일과 비밀번호를 입력하세요.");
    }
  };

  const handleLogout = () => {
    dispatch(clearUser());
    persistor.purge(); // 저장된 상태 초기화
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center mb-20">
        <div className="flex flex-col font-bold text-center text-black text-8xl">
          <span>solo</span>
          <span>living</span>
        </div>
      </div>
      <div className="flex-col w-full max-w-lg gap-2">
        <div className="mb-3">
          <UserInput
            type="text"
            placeholder="이메일을 입력하세요"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <UserInput
            type="password"
            placeholder="암호를 입력하세요"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {status === 'loading' && <p>로그인 중...</p>}
        {status === 'failed' && <p>{error}</p>}
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold text-white bg-blue-600 rounded-lg"
          text="로그인"
          onClick={handleLogin}
        />
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold rounded-lg text-stone-700 bg-stone-400"
          text="sns계정으로 로그인 하기"
        />
        <div className="flex items-center justify-center text-sm text-gray-500 space-x-14">
          <Link to="/login/signup">
            <button className="flex flex-col hover:underline">회원 가입</button>
          </Link>

          <div>|</div>
          <Link to="/">
            <button className="flex flex-col hover:underline">
              아이디,비밀번호 찾기
            </button>
          </Link>
        </div>
        {isAuthenticated && (
          <UserButton
            className="w-full py-3 mt-4 text-xl font-bold text-white bg-red-600 rounded-lg"
            text="로그아웃"
            onClick={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default Login;

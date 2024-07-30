import React from "react";
import UserInput from "../components/UserInput";
import UserButton from "../components/UserButton";
import { Link } from "react-router-dom";

function Login() {
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
          />
        </div>
        <div className="mb-3">
          <UserInput
            type="password"
            placeholder="암호를 입력하세요"
            name="password"
          />
        </div>
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold text-white bg-blue-600 rounded-lg"
          text="로그인"
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
            <button className="flex flex-col hover:underline">아이디,비밀번호 찾기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

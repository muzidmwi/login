import React from "react";
import UserInput from "../components/UserInput";
import UserButton from "../components/UserButton";

function Login() {
  return (
    <div>
      <div>
        <div className="items-center text-center text-black text-[32px] font-bold leading-9 flex flex-col">
          <span>solo</span>
          <span>living</span>
        </div>
      </div>
      <div>
        <div>
          <UserInput
            type="text"
            placeholder="이메일을 입력하세요"
            name="email"
          />
          <UserInput
            type="password"
            placeholder="암호를 입력하세요"
            name="password"
          />
          <UserButton
            className="px-4 py-2 font-bold text-white bg-blue-600 rounded-xl"
            text="로그인"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import UserInput from "../components/UserInput";
import UserButton from "../components/UserButton";

function FindID() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white pt-10">
      <div className="flex flex-col items-center mb-20">
        <div className="flex flex-col font-bold text-center text-black text-4xl">
          <span>아이디 / 비밀번호 찾기</span>
        </div>
      </div>
      <div className="flex-col w-full max-w-lg gap-2">
        <div className="mb-3">
          <UserInput
            type="email"
            placeholder="가입 시 입력한 이메일을 입력하세요"
            name="email"
          />
        </div>
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold text-white bg-blue-600 rounded-lg"
          text="아이디 찾기"
        />
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold text-white bg-blue-600 rounded-lg"
          text="비밀번호 찾기"
        />
      </div>
    </div>
  );
}

export default FindID;

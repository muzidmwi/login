import React, { useState } from "react";
import { Form, useSearchParams, useActionData, Link } from "react-router-dom";
import UserInput from "./UserInput";
import UserButton from "./UserButton";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login"
  const actionData = useActionData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center mb-20">
        <div className="flex flex-col font-bold text-center text-black text-8xl">
          <span>solo</span>
          <span>living</span>
        </div>
      </div>
      <Form method="post" className="flex-col w-full max-w-lg gap-2">
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
        {!isLogin && (
          <div className="mb-3">
            <UserInput
              type="password"
              placeholder="암호를 다시 입력하세요"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        {actionData?.message && (
          <p className="text-red-500">{actionData.message}</p>
        )}
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold text-white bg-blue-600 rounded-lg"
          text={isLogin ? "로그인" : "회원가입"}
          type="submit"
        />{" "}
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold rounded-lg text-stone-700 bg-stone-400"
          text="sns계정으로 로그인 하기"
        />
      </Form>

      <div className="flex items-center justify-center text-sm text-gray-500 space-x-14">
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>{isLogin ? "회원가입" : "로그인"}</Link>
        <div>|</div>
        <Link to="/" className="flex flex-col hover:underline">
          아이디,비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;

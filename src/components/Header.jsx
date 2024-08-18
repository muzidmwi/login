import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserInput from "./UserInput";
import UserButton from "./UserButton";

function Header() {
  const location = useLocation();

  return (
    <div className="w-full h-[108px] bg-white flex justify-center items-center border-b-2">
      <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
        <div className="flex items-center">
          <Link to="/">
            <div className="items-center text-center text-black text-[32px] font-bold leading-9 flex flex-col">
              <span>solo</span>
              <span>living</span>
            </div>
          </Link>
        </div>
        <div className="w-[457px] mx-4">
          <UserInput
            type="text"
            placeholder="Search tickets..."
          />
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          {location.pathname === "/logind" ? (
            <>
              <Link to="/SettingPage">
                <UserButton className="flex flex-col items-center justify-center h-12 px-4 py-2 text-lg font-bold leading-9 text-white bg-gray-700 rounded-3xl" text="설정" />
              </Link>
              <Link to="/write">
                <UserButton className="flex flex-col items-center justify-center h-12 px-4 py-2 text-lg font-bold leading-9 text-white bg-green-500 rounded-3xl" text="글쓰기" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <UserButton className="flex flex-col items-center justify-center h-12 px-4 py-2 text-lg font-bold leading-9 text-white bg-blue-500 rounded-3xl" text="로그인" />
              </Link>
              <Link to="/login/signup">
                <UserButton className="flex flex-col items-center justify-center h-12 px-4 py-2 text-lg font-bold leading-9 text-white bg-stone-700 rounded-3xl" text="회원가입" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

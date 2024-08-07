import React from "react";
import { NavLink } from "react-router-dom";
import UserInput from "./UserInput";
import UserButton from "./UserButton";

function MainNavigation() {
  return (
    <div className="w-full h-[108px] bg-white flex justify-center items-center border-b-2">
      <div className="flex items-center justify-between w-full max-w-screen-lg gap-10 px-4">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="items-center text-center text-black text-[32px] font-bold leading-9 flex flex-col"
          >
            <span>solo</span>
            <span>living</span>
          </NavLink>
        </div>
        <div className="flex-1 mx-4">
          <UserInput type="text" placeholder="Search tickets..." className="w-full" />
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <NavLink to="/login">
            <UserButton
              className="flex flex-col items-center justify-center h-12 px-4 py-2 text-lg font-bold leading-9 text-white bg-blue-500 rounded-3xl"
              text="로그인"
            />
          </NavLink>
          <NavLink to="/login/signup">
            <UserButton
              className="flex flex-col items-center justify-center h-12 px-4 py-2 text-lg font-bold leading-9 text-white bg-stone-700 rounded-3xl"
              text="회원가입"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;

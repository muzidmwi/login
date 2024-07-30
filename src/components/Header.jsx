import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-[108px] bg-white flex justify-center items-center">
      <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
        <div className="flex items-center">
          <Link to="/">
            <div className="text-center text-black text-[32px] font-normal font-['Jacques Francois Shadow'] leading-9">
              solo living
            </div>
          </Link>
        </div>
        <div className="w-[457px] h-10 pl-3 pr-4 py-2 bg-white rounded-lg border border-[#e0e0e0] flex items-center mx-4">
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full outline-none text-[#828282] text-base font-normal font-['Inter'] leading-normal"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <div className="h-[52px] px-4 py-2 bg-[#0803ff] rounded-3xl flex items-center justify-center">
              <div className="text-white text-2xl font-bold font-['Inter'] leading-9">
                로그인
              </div>
            </div>
          </Link>
          <Link to="/login/signup">
            <div className="h-[52px] px-4 py-2 bg-black rounded-3xl flex items-center justify-center">
              <div className="text-white text-2xl font-bold font-['Inter'] leading-9">
                회원 가입
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="grid p-16 m-auto my-0 place-items-center">
      <div className="mt-16 mb-8 text-5xl font-bold">
        해당 페이지를 찾지 못헀습니다.
      </div>
      <div className="text-4xl leading-tight">
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </div>

      <div
        onClick={() => navigate("/")}
        className="px-5 py-2 mt-6 text-2xl font-bold leading-tight cursor-pointer rounded-2xl bg-slate-500"
      >
        메인 페이지로 이동하기
      </div>
    </div>
  );
}

export default NotFound;

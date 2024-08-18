import React, { useState } from "react";
import UserButton from "../components/UserButton";
import NicknameChange from "../components/NicknameChange";
import PostManagement from "../components/PostManagement"; // 경로 수정: 파일 위치를 확인하세요

function MyInfo() {
  const [bio, setBio] = useState(""); // 자기소개 상태 관리
  const [profileImage] = useState("https://via.placeholder.com/100"); // 프로필 이미지 URL, 임시 이미지 사용

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleBioConfirm = () => {
    alert(`자기소개가 저장되었습니다: ${bio}`);
    // 이곳에 추가적인 저장 로직이나 API 호출 등을 추가할 수 있습니다.
  };

  const handleDeleteAccount = () => {
    alert("회원 탈퇴가 진행됩니다.");
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      {/* 프로필 이미지 */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profileImage} // 프로필 이미지 URL
          alt="프로필 이미지"
          className="w-24 h-24 rounded-full mb-4"
        />
      </div>

      {/* 닉네임 변경 컴포넌트 */}
      <NicknameChange />

      {/* 자기소개 입력 칸 */}
      <div className="w-full mb-6">
        <h3 className="text-lg font-semibold mb-2">자기소개</h3>
        <textarea
          value={bio}
          onChange={handleBioChange}
          placeholder="자기소개를 입력하세요"
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="4"
        />
      </div>

      {/* 자기소개 확인 버튼 */}
      <UserButton
        className="w-1/6 py-3 mb-4 text-xl font-bold text-white bg-green-600 rounded-lg"
        text="확인"
        onClick={handleBioConfirm}
      />


      {/* 회원 탈퇴 버튼 */}
      <UserButton
        className="w-1/7 py-3 text-xl font-bold text-white bg-red-600 rounded-lg"
        text="회원 탈퇴"
        onClick={handleDeleteAccount}
      />
    </div>
  );
}

export default MyInfo;

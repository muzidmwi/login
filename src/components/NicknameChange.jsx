import React, { useState } from "react";
import UserButton from "../components/UserButton";
import UserInput from "../components/UserInput";

function NicknameChange() {
  const [isEditing, setIsEditing] = useState(false); // 닉네임 입력 창 표시 여부를 관리하는 상태
  const [nickname, setNickname] = useState("현재 닉네임"); // 현재 닉네임 상태
  const [tempNickname, setTempNickname] = useState(nickname); // 임시 닉네임 상태

  const handleEditClick = () => {
    setIsEditing(true); // 닉네임 입력 창을 표시하도록 상태를 변경
  };

  const handleTempNicknameChange = (e) => {
    setTempNickname(e.target.value); // 입력 필드의 값이 변경될 때 임시 닉네임 상태를 업데이트
  };

  const handleConfirmClick = () => {
    if (tempNickname.trim() === "") {
      alert("닉네임을 입력하세요."); // 닉네임 입력이 없을 때 경고 알림
    } else {
      setNickname(tempNickname); // 임시 닉네임을 실제 닉네임 상태로 업데이트
      alert(`닉네임이 "${tempNickname}"(으)로 변경되었습니다.`); // 닉네임 변경 완료 시 알림
      setIsEditing(false); // 닉네임 변경이 완료되면 입력 창을 숨김
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">{nickname}</h2>

      {!isEditing ? (
        <UserButton
          className="w-full py-3 mb-4 text-xl font-bold text-white bg-blue-600 rounded-lg"
          text="닉네임 변경"
          onClick={handleEditClick} // 닉네임 변경 버튼 클릭 시 입력 창 표시
        />
      ) : (
        <div className="w-full">
          <UserInput
            type="text"
            placeholder="새 닉네임을 입력하세요"
            value={tempNickname}
            onChange={handleTempNicknameChange}
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          <UserButton
            className="w-full py-3 text-xl font-bold text-white bg-green-600 rounded-lg"
            text="확인"
            onClick={handleConfirmClick} // 확인 버튼 클릭 시 닉네임 변경 처리
          />
        </div>
      )}
    </div>
  );
}

export default NicknameChange;

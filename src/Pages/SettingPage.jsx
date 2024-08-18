import React, { useState } from "react";
import MyInfo from "../components/MyInfo";
import FollowManagement from "../components/FollowManagement";
import PostManagement from "../components/PostManagement";

function SettingsPage() {
  const [activeSection, setActiveSection] = useState("myInfo");

  const renderSection = () => {
    switch (activeSection) {
      case "myInfo":
        return <MyInfo />;
      case "followManagement":
        return <FollowManagement />;
      case "postManagement":
        return <PostManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/5 bg-white shadow-lg p-4">
        <h1 className="text-xl font-bold mb-6">설정</h1>
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeSection === "myInfo" ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setActiveSection("myInfo")}
            >
              내 정보
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeSection === "followManagement"
                  ? "bg-gray-200"
                  : "bg-white"
              }`}
              onClick={() => setActiveSection("followManagement")}
            >
              팔로우 관리
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeSection === "postManagement" ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setActiveSection("postManagement")}
            >
              내 게시글 관리
            </button>
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-8">{renderSection()}</div>
    </div>
  );
}

export default SettingsPage;

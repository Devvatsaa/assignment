import React from "react";
import { FiArrowLeft } from "react-icons/fi";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Nav: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: "All", count: 100, key: "all" },
    { label: "Full length", count: 30, key: "full-length" },
    { label: "Sectional", count: 50, key: "sectional" },
    { label: "Previous", count: 20, key: "previous" },
  ];

  return (
    <div className=" bg-gray-100 rounded-lg">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4 gap-3">
        {/* Back Button and Title */}
        <div className="flex items-center gap-2">
          <FiArrowLeft className="text-lg cursor-pointer" />
          <h1 className="md:text-lg text-[18px] font-semibold text-black">GATE XE</h1>
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-3">
          <button className="md:px-3 px-2 py-1 bg-black text-white rounded-full">
            GATE XE
          </button>
          <button className="md:px-3 px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
            CFTRI
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex md:flex-row flex-col items-center gap-4 overflow-x-auto scrollbar-hide bg-white p-3 rounded-xl">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`cursor-pointer flex items-center gap-2 px-4 py-2  ${
              activeTab === tab.key
                ? " text-purple-700 border-b-2 border-purple-700"
                : " text-gray-700"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] ${
                activeTab === tab.key
                  ? "bg-purple-700 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {tab.count}
            </span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
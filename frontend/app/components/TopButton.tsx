import React, { useState } from "react";

interface ButtonBarProps {
  tabs: string[];
}

const TopButton: React.FC<ButtonBarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex md:flex-row flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md overflow-x-auto scrollbar-hide">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 text-sm font-medium rounded-full transition ${
            activeTab === tab
              ? "bg-purple-700 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TopButton;

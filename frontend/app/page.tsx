"use client";
import React, { useState } from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Nav from "./components/NavBar";
import TopButton from "./components/TopButton";
const cards = [
  {
    examType: "Full Length",
    liveStatus: "Live",
    title: "FLT 1: Food Technology",
    details: ["100 Questions", "100 Marks", "60 Minutes", "English"],
    syllabusLink: "#",
    buttonLabel: "Starts Now",
    buttonAction: () => alert("Starting Test..."),
    expandedContent:
      "Fruits and vegetables processing, Plantation crops processing and products, Milk and milk products processing & Processing of animal products",
  },
  {
    examType: "Full Length",
    score: "50/100",
    rank: "40",
    title: "FLT 2: Food Technology",
    details: ["100 Questions", "100 Marks", "60 Minutes", "English"],
    syllabusLink: "#",
    buttonLabel: "Reattempt",
    buttonAction: () => alert("Reattempting Test..."),
  },
  {
    examType: "Full Length",
    title: "FLT 3: Food Technology",
    details: ["100 Questions", "100 Marks", "60 Minutes", "English"],
    syllabusLink: "#",
    buttonLabel: "Starts Now",
    buttonAction: () => alert("Starting Test..."),
  },
];
export default function Home() {
  const tabs = [
    "All subjects",
    "Food Technology",
    "Thermodynamics",
    "Engineering Math",
    "General Aptitude",
  ];
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="  bg-gray-100 min-h-[100vh]">
      {/* Static Sidebar */}
      <div className="flex h-screen fixed">
        <Sidebar />
      </div>
      <div className="flex justify-center bg-gray-100 ml-20 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-4 mt-12 md:w-[70%] w-[90%]">
          <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="rounded-xl bg-white">
            <TopButton tabs={tabs} />
            <div className="p-6 space-y-6">
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Main Content */}
    </div>
  );
}

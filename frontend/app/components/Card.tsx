import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsQuestionCircle, BsClock, BsBook, BsGlobe } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
interface CardProps {
  examType: string;
  liveStatus?: string;
  score?: string;
  rank?: string;
  title: string;
  details: string[];
  syllabusLink: string;
  buttonLabel?: string;
  buttonAction?: () => void;
  expandedContent?: string;
}

const Card: React.FC<CardProps> = ({
  examType,
  liveStatus,
  score,
  rank,
  title,
  details,
  syllabusLink,
  buttonLabel,
  buttonAction,
  expandedContent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailIcons = [
    <BsQuestionCircle key="questions" />,
    <BsBook key="marks" />,
    <BsClock key="time" />,
    <BsGlobe key="language" />,
  ];
  const [openBar,setOpenBar]=useState(false)
  return (
    <div className=" bg-gray-50 border border-gray-200 rounded-lg shadow-md">
      <div className="bg-pink-50 md:p-4 p-3">
      <div className="flex flex-col md:flex-row gap-4 justify-between ">
        <div>
          <span className="px-3 py-2 text-sm font-medium bg-purple-700 text-white rounded-full">
            {examType}
          </span>
          {liveStatus && (
            <span className="ml-2 px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-full">
              {liveStatus}
            </span>
          )}
          {(score || rank) && (
            <span className="ml-2 px-3 py-1 text-sm font-medium bg-gray-200 text-gray-700 rounded-full">
              Score: {score} | Rank: {rank}
            </span>
          )}
        </div>
        <div className="flex md:flex-row-reverse  gap-4">
        {buttonLabel && (
         <button
         onClick={() => setOpenBar(!openBar)}
         className={`px-4 py-2  font-medium rounded-full ${
           openBar
             ? "bg-white text-purple-600 border-2 border-purple-600"
             : "bg-purple-600 text-white hover:bg-purple-700"
         }`}
       >
         {buttonLabel}
       </button>
        )}
        {openBar &&
          (<button
            onClick={()=>setOpenBar(!openBar)}
            className="px-4 py-1 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-xl"
          >
            <MdBarChart />
          </button>)
        }
        </div>
      </div>

      {/* Title Section */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>

      {/* Details Section */}
      <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center gap-1">
            {detailIcons[index]}
            <span>{detail}</span>
          </div>
        ))}
      </div>
      </div>
      {/* Header Section */}
      
      <div className="p-3">
      <div className="mt-4 flex">
        <a
          href={syllabusLink}
          className="text-blue-400 font-bold  text-sm"
        >
          View Syllabus
        </a>
        {expandedContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? (
              <>
                <FiChevronUp className="mr-1" />
              </>
            ) : (
              <>
                <FiChevronDown className="mr-1" />
              </>
            )}
          </button>
        )}
        </div>
        {isExpanded && (
          <div className="mt-2 text-sm text-gray-600">{expandedContent}</div>
        )}
      </div>
      {/* Expandable Content */}
      
        
      
    </div>
  );
};

export default Card;
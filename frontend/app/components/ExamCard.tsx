import React from "react";

interface ExamCardProps {
  examType: string;
  examTitle: string;
  liveStatus?: string;
  details: string[];
  syllabusLink: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  extraInfo?: string; 
}

const ExamCard: React.FC<ExamCardProps> = ({
  examType,
  examTitle,
  liveStatus,
  details,
  syllabusLink,
  buttonLabel,
  onButtonClick,
  extraInfo,
}) => {
  console.log(syllabusLink)
  return (
    <div className=" bg-gray-50 border border-gray-300 rounded-lg shadow-md">
      {/* Header */}
      <div className="bg-pink-50 w-full p-3 border-b">
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 sm:text-sm text-[12px] font-medium bg-purple-700 text-white rounded-full">
          {examType}
        </span>
        {liveStatus && (
          <span className="p-1 sm:text-sm text-[10px] font-medium text-red-500 rounded-full">
            {liveStatus}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{examTitle}</h3>

      {/* Extra Info */}
      {extraInfo && (
        <p className="mt-1 text-sm text-purple-600 font-medium">{extraInfo}</p>
      )}

      {/* Details */}
      <div className="flex flex-col sm:flex-col lg:flex-row lg:items-center gap-3 mt-2 text-gray-600">
        <div className="text-sm">
        {details.map((detail, index) => (
          <span key={index}>
            {detail}
            {index < details.length - 1 && <span className="md:mx-2 mx-1">|</span>}
          </span>
        ))}
        </div>
        {buttonLabel && (
          <button
            onClick={onButtonClick}
            className="mx-5 px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-full shadow text-[10px] sm:text-sm"
          >
            {buttonLabel}
          </button>
        )}
      </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between mx-4 my-2">
        <div
          className="text-blue-600 hover:cursor-pointer text-sm font-medium"
        >
          View Syllabus
        </div>
        
      </div>
    </div>
  );
};

export default ExamCard;
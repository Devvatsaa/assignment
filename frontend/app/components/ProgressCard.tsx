import Image from "next/image";
import React from "react";

interface ProgressCardProps {
  title: string;
  description: string;
  progress: number;
  imageUrl: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  description,
  progress,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} className="md:w-1/3 w-full object-cover" width={100} height={100}/>
      <div className="md:p-4 md:w-2/3 p-3">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3 mt-2">{description}</p>
        <div className="flex items-center gap-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-500">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;

import React, { useState } from "react";
import { FiMenu, FiChevronLeft } from "react-icons/fi"; // Menu and arrow icons
import { AiOutlineHome, AiOutlineSchedule } from "react-icons/ai"; // React icons
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } h-screen bg-purple-800 text-white transition-all duration-300 flex flex-col justify-between absolute md:static`}
    >
      {/* Top Section */}
      <div>
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className={`${isOpen ? "text-xl font-bold" : "hidden"} transition-all`}>
            enest
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiChevronLeft size={20} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 space-y-4 md:text-[16px] text-[12px]">
          <MenuItem
            isOpen={isOpen}
            icon={<AiOutlineHome size={20} />}
            label="My Progress"
          />
          <MenuItem
            isOpen={isOpen}
            icon={<AiOutlineSchedule size={20} />}
            label="Class Schedule"
          />
          <MenuItem
            isOpen={isOpen}
            icon={<HiOutlineClipboardList size={20} />}
            label="My Course"
          />
          <MenuItem
            isOpen={isOpen}
            icon={<HiOutlineClipboardList size={20}  />}
            label="My Test Series"
          />
          <MenuItem
            isOpen={isOpen}
            icon={<IoDocumentTextOutline size={20}/>}
            label="Short Notes"
          />
          <MenuItem
            isOpen={isOpen}
            icon={<IoDocumentTextOutline size={20}/>}
            label="DSLR"
          />
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <nav className="mb-4 space-y-4 md:text-[16px] text-[12px]">
          <MenuItem
            isOpen={isOpen}
            icon={<MdOutlineSupportAgent size={20}  />}
            label="Support"
          />
          <MenuItem
            isOpen={isOpen}
            icon={<BiLogOut size={20}/>}
            label="Log Out"
          />
        </nav>

        {/* Profile */}
        <div
          className={`flex items-center ${
            isOpen ? "px-4" : "justify-center"
          } py-4 bg-purple-900`}
        >
          <CgProfile size={28} className="text-white" />
          {isOpen && (
            <div className="ml-4">
              <p className="text-sm">My Profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface MenuItemProps {
  isOpen: boolean;
  icon: React.ReactNode;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ isOpen, icon, label }) => {
  return (
    <div
      className={`flex items-center px-4 py-2 cursor-pointer hover:bg-purple-700 ${
        isOpen ? "justify-start" : "justify-center"
      }`}
    >
      {icon}
      {isOpen && <span className="ml-4">{label}</span>}
    </div>
  );
};

export default Sidebar;

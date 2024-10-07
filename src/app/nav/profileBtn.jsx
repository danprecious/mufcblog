

import { BiArrowToBottom } from "react-icons/bi";
import { FaAngleDown, FaSortDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import  { UserAvatar, UserName } from "./avatar";


export const NavProfileButton = () => {
    return (
      <div className="flex flex-col md:flex-row items-center">
        <UserName />
        <UserAvatar />
        <IoMdArrowDropdown className="p-0 text-sm md:hidden"/>
      </div>
    );
  }; 
import { BiHome, BiUserCircle } from "react-icons/bi";
import DashboardProfile from "../profile";

import { FaHome, FaUsers } from "react-icons/fa";
import Link from "next/link";

const sideBarLinks = [
  {
    linkName: "Dashboard",
    href: "/",
    icon: <BiHome />,
  },
  {
    linkName: "Moderators",
    href: "/adminDashboard/moderators",
    icon: <BiUserCircle />,
  },
  {
    linkName: "Community",
    href: "/adminDashboard/community",
    icon: <FaUsers />,
  },
];
 
const DashboardSideBar = () => {
  return (
    <div className="py-8 border-r border-bgShade h-full w-full">
      <div className="w-full flex items-center flex-col">
        <DashboardProfile />
        <div className="w-full py-7">
          {sideBarLinks?.map((sideLink) => (
            <Link key={sideLink.linkName} href={sideLink.href} className="flex justify-center items-center my-6">
              {sideLink.icon}
              <p className="p-2">{sideLink.linkName}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;

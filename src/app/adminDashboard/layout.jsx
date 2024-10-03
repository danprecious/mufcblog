import { FaLightbulb, FaMoon, FaPlus } from "react-icons/fa";
import DashboardSideBar from "./components/sidebar";
import { BiPlus } from "react-icons/bi";
import "@/app/globals.css";
import CreatePostProvider from "./createPost/state/createPostContext";

const AdminDashboard = ({ children }) => {
  return (
    <CreatePostProvider>
      <section className="h-[100vh]">
        <div className="w-[100%] flex">
          <div className="lg:w-[20%] hidden lg:flex sticky top-0">
            <DashboardSideBar />
          </div>
          <div className="lg:w-[80%] w-full ">
            <div className="py-3 px-8 flex justify-end items-center sticky top-0">
              <button className="p-3 flex items-center bg-bgShade rounded-md">
                <p className="px-1">Create new post</p>
                <BiPlus />
              </button>
              <div className="mx-4">
                <FaMoon />
              </div>
            </div>
            <div className="">{children}</div>
          </div>
        </div>
      </section>
    </CreatePostProvider>
  );
};

export default AdminDashboard;

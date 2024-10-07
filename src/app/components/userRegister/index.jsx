"use client";

import { login } from "@/app/actions/authenticate";

// import { FaGoogle } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa6";

const JoinCommunity = () => {
  return (
    <div className="absolute top-[100%] h-[7em] w-[15em] z-50 p-2 shadow-md rounded-2xl">
      <div className="flex flex-col justify-center items-center h-full">
        <p className="font-medium"> Join with Google</p>
        <div className="text-center  p-2 my-2 bg-blue-100 text-red-600 hover:text-white flex justify-center rounded-full hover:bg-red-400">
        
            <button className="p-1 rounded-md flex" onClick={() => login("google")}>
              <FaGoogle />
            </button>

        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;

"use client";

import { login } from "@/app/actions/authenticate";



const CommunitySignIn = () => {
  return (
    <button
      type="submit"
      onClick={() => login("google")}
      className="px-6 py-2 text-sm text-white bg-red-600 rounded-md "
    >
      Join community
    </button>
  );
};

export default CommunitySignIn;

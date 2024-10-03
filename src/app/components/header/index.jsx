"use client";

import JoinCommunity from "../userRegister";
import CommunitySignIn from "./communitySignIn";
 
const Header = () => {
  const userState = true;
  const open = true;
 
  return (
    <div className="mx-4 py-2 flex justify-end relative">
      {userState && (
        ""
      )}
      {open && <JoinCommunity />}
    </div>
  );
};

export default Header;

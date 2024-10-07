"use server";

import { auth } from "@/auth";
import { MobileNav } from "./MobileNav";
import NavBar from "./nav-bar";

import Logo from "./logo";
import { NavProfileButton } from "./profileBtn";

const Header = async () => {
  const session = await auth();

  return (
    <header className=" w-[100%]  py-5 md:px-[5em] sticky top-0 z-50 bg-bgShade flex justify-between px-2">
      <div className="">
        <Logo />
      </div>
      <div className="flex">
        <NavBar>
          <NavProfileButton />
        </NavBar>
      </div>

      <MobileNav username={session.user.name} />
    </header>
  );
};

export default Header;

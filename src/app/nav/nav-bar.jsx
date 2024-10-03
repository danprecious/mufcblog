"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { StateContext } from "@/app/utils/context";

import { NavProfileButton } from "./profileBtn";
import Logo from "./logo";
import { signOut } from "@/auth";
import SignOut from "./signOut";

const NavBar = () => {
  const pathname = usePathname();
  const { state, isAuth, setIsAuth, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {

    console.log("clicked");
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };

  return (
    <div className="flex  justify-between w-full px-3 relative">
      <div>
        <Logo />
      </div>
      <nav className="md:flex justify-end items-center relative">
        <div className="md:flex hidden">
          <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
            <p className="font-semibold mx-5">Home</p>
          </Link>
          <Link
            href="/blog/articles"
            className={`${pathname !== "/" ? "active" : ""}`}
          >
            <p className="font-semibold">Posts</p>
          </Link>
        </div>
        <div className="md:ml-5">
          <button className="z-50" onClick={openNav}>
            <NavProfileButton />
            </button>
        </div>
      </nav>

      {navOpen ? <NavBody /> : ""}
    </div>
  );
};

export default NavBar;

// OTHER COMPONENTS UNDER THE NAVBAR

const NavBody = () => {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    { title: "All Posts", href: "/articles" },
  ];
  return (
    <ul className="w-[100%] absolute md:right-[] rounded-[4px] right-2  z-50 min-w-[5em] max-w-[14em] top-12 bg-stone-900">
      <div className="text-left">
        {navItems.map(({ title, href }, index) => (
          <Link
            key={index}
            href={href}
            className={`${pathname === "/" ? "active" : ""}`}
          >
            <div className="hover:border-secondary hover:border-b-[1px] hover:text- hover:border-solid hover:border-b-opacity-[0.2] p-3 flex justify-center items-center my-3">
              {title}
            </div>
          </Link>
        ))}
      </div>
      <SignOut /> 
    </ul>
  );
};

"use client";
import { useContext, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { StateContext } from "@/app/utils/context";

import Logo from "./logo";

const NavBar = ({ children }) => {
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
          {children}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

// OTHER COMPONENTS UNDER THE NAVBAR

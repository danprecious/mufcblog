"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import { StateContext } from "@/app/utils/context";
import { useContext } from "react";

export const MobileNav = ({ username }) => {
  // const pathname = usePathname();
  const { state, isAuth, setIsAuth, dispatch } = useContext(StateContext);

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    { title: "All Posts", href: "/articles" },
  ];
  return (
    <>
      {state.navOpen ? (
        <ul className="w-[100%] md:hidden absolute md:right-[] rounded-[4px] right-2  z-50 min-w-[5em] max-w-[14em] top-[100%] bg-stone-900">
          <div className="text-left">
          <div className="text-center py-3">{username}</div>
            {navItems.map(({ title, href }, index) => (
              <Link
                key={index}
                href={href}
                //   className={`${pathname === "/" ? "active" : ""}`}
              >
                <div className="hover:border-secondary hover:border-b-[1px] hover:text- hover:border-solid hover:border-b-opacity-[0.2] p-3 flex justify-center items-center my-3">
                  {title}
                </div>
              </Link>
            ))}
          </div>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

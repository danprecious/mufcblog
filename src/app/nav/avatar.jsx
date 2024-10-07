"use server";

import { auth } from "@/auth";
import Image from "next/image";
import { parseName } from "../utils/parseName";

export const UserName = async () => {
  const session = await auth();

  if (!session.user) return "";

  const parsedName = parseName(session.user.name);
  return <div className="hidden md:flex"> {session.user.name} </div>;
};

export const UserEmail = async () => {
  const session = await auth();

  if (!session.user) return "";

  return <div>{session.user.email}</div>;
};

export const UserAvatar = async () => {
  const session = await auth();

  if (!session.user) return "";

  return (
    <div className="w-[29px] h-[30px] overflow-hidden rounded-full ml-3">
      <Image
        src={session.user.image}
        alt="display picture"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
      ;
    </div>
  );
};

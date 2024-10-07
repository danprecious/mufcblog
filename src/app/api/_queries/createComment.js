"use server";

import prisma from "@/app/libs/prismadb";
import { getSession } from "@/app/utils/getSession";

export const createComment = async (data) => {
  const { session } = await getSession();


  console.log(data);
  console.log(data.dataComment);


  const commentData = {
    authorName: session.user.name,
    postId: data.postId,
    content: data.dataComment,
  };
  try {
    const newComment = await prisma.comment.create({ data: commentData });
  } catch (error) {
    console.log(error);
  }
};

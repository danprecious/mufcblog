import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { createComment } from "../../_queries/createComment";

const prisma = new PrismaClient();

export async function POST(request) {
  const formData = await request.formData();
  const comment = formData.get("comment").trim();

  const commentData = {
    comment,
  };

  try {
    if (!comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const comment = await createComment(commentData);

    return NextResponse.json(comment);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // return NextResponse.json({success: "Post successfull"})
}

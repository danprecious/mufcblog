import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { uploadCoverImage } from "../_queries/gridFsStore";

const prisma = new PrismaClient();

export async function POST(request) {
  const formData = await request.formData();
  const postTitle = formData.get("postTitle").trim();
  const intro = formData.get("intro").trim();
  const coverImage = formData.get("coverImage");

  const sections = [];
  const sectionData = {};

  for (const [key, value] of formData.entries()) {
    const sectionMatch = key.match(
      /^sections\[(\d+)\]\.(sectionHeading|sectionContent)$/
    );

    if (sectionMatch) {
      const index = sectionMatch[1];
      const field = sectionMatch[2];
      if (!sectionData[index]) {
        sectionData[index] = {};
      }
      sectionData[index][field] = value.trim();
    }
  }

  Object.keys(sectionData).forEach((index) => {
    sections.push({
      heading: sectionData[index].sectionHeading,
      content: sectionData[index].sectionContent,
    });
  });

  const fileId = await uploadCoverImage(coverImage);
  //  const data =  {
  //   title: postTitle,
  //   intro: intro,
  //   coverImageId:  coverImageId,
  //   sections: {
  //     create: sections.map((section) => ({
  //       heading: section.heading,
  //       content: section.content,
  //     })),
  //   },
  // };
  console.log(fileId);

  try {
    if (!postTitle || !intro || !sections ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const post = await prisma.post.create({
      data: {
        title: postTitle,
        intro,
        coverImageId: fileId,
        sections: {
          create: sections.map((section) => ({
            heading: section.heading,
            content: section.content,
          })),
        },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // return NextResponse.json({success: "Post successfull"})
}

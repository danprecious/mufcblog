import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";
import { MongoClient, GridFSBucket } from "mongodb";

const prisma = new PrismaClient();
const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("mufcblog-local");
const bucket = new GridFSBucket(db, { bucketName: "coverImages" });

export const getOnePost = async (postId) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        coverImage: true,
        sections: true,
      },
    });

    console.log(post.coverImageId);

    const file = await db
      .collection("coverImages.files")
      .findOne({ _id: new ObjectId(post.coverImageId) });

      console.log(file);
    if (!file) {
      console.log("Error Fetching files:");
      return;
    } else {
      console.log("File meta data:", file);
    }

    const actualPost = { ...post, coverImage: file, coverImageData: [] };
    console.log(actualPost.coverImage);

    if (actualPost.coverImage) {
      const downloadStream = bucket.openDownloadStream(actualPost.coverImage._id);

      // console.log()
      const chunks = [];

      for await (const chunk of downloadStream) {
        chunks.push(chunk);
      }

      actualPost.coverImageData = Buffer.concat(chunks).toString("base64");
      console.log(actualPost.coverImageData);
    } else {
      console.log('Problem downloading stream');
      actualPost.coverImageData = null;
    }

    console.log(actualPost);
    return actualPost;
  } catch (error) {
    console.log(error);
  }
};

import { PrismaClient } from "@prisma/client";
import { MongoClient, GridFSBucket } from "mongodb";




const prisma = new PrismaClient();
const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("mufcblog-local");
const bucket = new GridFSBucket(db, { bucketName: "coverImages" });

export const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        coverImage: true,
        sections: true,
      },
    });

    const fileCursor = bucket.find();
    const coverImages = await fileCursor.toArray();

    const actualPosts = posts.map((post) => {
      const coverImage = coverImages.find(
        (image) => image._id.toString() === post.coverImageId
      );

      return {
        ...post,
        coverImage,
        coverImageData: [],
      };
    });

    for (const post of actualPosts) {
      if (post.coverImage) {
        const downloadStream = bucket.openDownloadStream(post.coverImage._id);
        const chunks = [];

        for await (const chunk of downloadStream) {
          chunks.push(chunk);
        }

        post.coverImageData = Buffer.concat(chunks).toString("base64");
      } else {
        post.coverImageData = null;
      }
    }

    // console.log(actualPosts)
    return actualPosts;
  } catch (error) {
    console.log(error);
  }
};

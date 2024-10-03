import { MongoClient, GridFSBucket } from "mongodb";
import { NextResponse } from "next/server";
import { getAllPosts } from "../_queries/getPosts";

const mongoURI = process.env.DATABASE_URL;

const client = new MongoClient(mongoURI);
const db = client.db("mufcblog-local");
const bucket = new GridFSBucket(db, { bucketName: "coverImages" });

export async function GET(request) {

  const { searchParams } = new URL(request.url);

  const postId = searchParams.get("article");
  console.log(request.url);

  if (postId) {
    try {
      const post = await getOnePost(postId);

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      console.log(post);
      return new Response(JSON.stringify(post));
    } catch (error) {
      return NextResponse.json(
        { error: "Error fetching post" },
        { status: 500 }
      );
    }
  }

  try {
    const posts = await getAllPosts();
    return new Response(JSON.stringify(posts));
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

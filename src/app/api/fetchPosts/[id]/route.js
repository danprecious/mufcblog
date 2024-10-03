import { MongoClient, GridFSBucket } from "mongodb";
import { NextResponse } from "next/server";
import { getOnePost } from "../../_queries/getOnePost";

const mongoURI = process.env.DATABASE_URL;

const client = new MongoClient(mongoURI);
const db = client.db("mufcblog-local");
const bucket = new GridFSBucket(db, { bucketName: "coverImages" });

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const post = await getOnePost(id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    console.log(post);
    return new Response(JSON.stringify(post));
  } catch (error) {
    return NextResponse.json({ error: "Error fetching post" }, { status: 500 });
  }
}

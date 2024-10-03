"use client";

import Link from "next/link";
import Card from "../card";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { StateContext } from "@/app/utils/context";

const PostCollection = ({ posts }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(StateContext);

  const handleClick = (post) => {
    dispatch({ type: "CURRENT_POST", payload: post });
    console.log(state.post);
    console.log(post);
  };

  return (
    <div className="custom-grid my-[2em]">
      {posts ? (
        posts.map((post, index) => {
          console.log(post);
          return (
            <Link
              key={post.id}
              href={`articles/${post.id}`}
              onClick={() => handleClick(post)}
            >
              <Card
                title={post.title}
                author={"author"}
                postDate={"date"}
                thumbnail={post.coverImageData}
              />
            </Link>
          );
        })
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default PostCollection;

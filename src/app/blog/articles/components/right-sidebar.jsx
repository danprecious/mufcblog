"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LatestPostCard from "./latestPostCard";
import axios from "axios";

const RightSidebar = () => {
  const [posts, setPosts] = useState([]);

  const handleClick = (post) => {
    dispatch({ type: "CURRENT_POST", payload: post });
    console.log(state.post);
    console.log(post);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:3000/api/fetchPosts");

      setPosts(response.data);
      // console.log(posts);x`
    };

    fetchPosts();
  }, []);

  return (
    <div className="hidden lg:grid w-[25%] rounded-[10px] ">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-[1.1rem] font-bold py-5">Latest Posts</h3>
        <Link href="../articles" className="hover:text-primary">
          <p className="font-bold text-xs ">See more</p>  
        </Link>
      </div>
      <div className=" overflow-y-scroll">
        {posts.map((post) => {
          const modifiedTitle =
            post.title.length > 18
              ? post.title.slice(0, 20) + "..."
              : post.title;

          return (
            <Link
              key={post.id}
              href={`${post.id}`}
              onClick={() => handleClick(post)}
              className="w-full flex justify-center rounded-md hover:border border-stone-600 my-10"
            >
              <LatestPostCard
                postTitle={modifiedTitle}
                author={"author"}
                thumbnail={post.coverImageData}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;

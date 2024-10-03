"use client";

import CustomButton from "@/app/components/button";
import CommentSecton from "@/app/blog/articles/components/commentSecton";
import RightSidebar from "@/app/blog/articles/components/right-sidebar";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import PostInfo from "./components/postInfo";
import { useRouter } from "next/navigation";
import axios from "axios";
import CoverImage from "./components/coverImage";
import { StateContext } from "@/app/utils/context";

const UniqueBlog = ({ params }) => {
  console.log(params.article);
  const { state, dispatch } = useContext(StateContext);

  const { currentPost } = state;

  // console.log(currentPost);

  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/fetchPosts/${params.article}`
        );
        const post = response.data;
        dispatch({ type: "CURRENT_POST", payload: post });
      } catch (error) {
        console.log(error);
      } finally {
        console.log('done');
      }
    };
    
    if (Object.keys(currentPost).length == 0) {
      fetchPost();
    }
  }, [params.id, currentPost]);

  const handleComment = () => {
    console.log("comment sent");
  };

  const nextPrev = (e) => {
    if (e.target.value === "next") {
      console.log("Next button");
    } else if (e.target.value === "previous") {
      console.log("prev button");
    }

    console.log(e.target.value);
  };

  return (
    <div className="w-[100%] relative h-[93vh] flex justify-center">
      <div className="absolute w-full bottom-0 flex justify-around h-[92vh] overflow-scroll py-8 px-2 md:px-5 rounded-[20px]">
        {currentPost ? (
          <div className="lg:w-[65%] overflow-scroll w-[100%] mt-5 md:px-7">
            <div className="w-full mb-5 relative bg-bgShade h-[20em] bg overflow-hidden">
              <CoverImage
                coverImageData={currentPost.coverImageData}
                postTitle={currentPost.title}
              />
            </div>

            <div className="flex justify-between"></div>
            <PostInfo
              title={"Post title"}
              author={"Author"}
              datePublished={"Sept 21"}
            />
            <div className="text-sm text-justify p-5">{""}</div>

            <div className="w-full flex md:justify-end md:px-3 justify-center">
              <div className="flex">
                <CustomButton
                  text="Previous Post"
                  value="previous"
                  fn={nextPrev}
                />
                <CustomButton text="Next Post" value="next" fn={nextPrev} />
              </div>
            </div>

            <div className=" w-[100%] p-3 mt-10 bg-">
              <div className="p-3">
                <p className="my-3 font-semibold">Leave a comment</p>
                <div className="my-3">
                  <textarea
                    name=""
                    id=""
                    rows={7}
                    className="w-[100%] outline-none border-solid border-[1px] p-2 border-red-100 resize-none max-h-[20%]"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <CustomButton
                    text="Post comment"
                    className="bg-neutral-800"
                    fn={handleComment}
                  />
                </div>
              </div>
              {/* <CommentSecton comments={comments} /> */}
            </div>
          </div>
        ) : (
          <div className="">Post could not be fetched</div>
        )}
        <RightSidebar />
    
      </div>
    </div>
  );
};

export default UniqueBlog;

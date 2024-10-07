"use client";

import { createComment } from "@/app/api/_queries/createComment";
import CustomButton from "@/app/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CommentBox = ({ postId }) => {

  const [commentText, setCommentText] = useState('');

  const schema = z.object({
    comment: z.string().min(0, { message: "empty comment not allowed" }),
  });


  const comment = async (data) => {
  
    
    const dataComment = data.comment;
    const commentdata = {
      postId,
      dataComment,
    };

    console.log(data);
    const response = await createComment(commentdata);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className=" w-[100%] p-3 mt-10 bg-">
      <div className="p-3">
        <p className="my-3 font-semibold">Leave a comment</p>
        <div className="my-3">
          <form onSubmit={handleSubmit(comment)}>
            <textarea
              {...register("comment")}
              name="comment"
              id="comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={7}
              className="w-[100%] outline-none border-solid border-[1px] p-2 border-red-100 resize-none max-h-[20%] text-black"
            ></textarea>
            <button className="" type="submit">
              Comment
            </button>
          </form>
        </div>
        <div className="flex justify-end"></div>
      </div>
    </div>
  );
};

export default CommentBox;

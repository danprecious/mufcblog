import CustomButton from "@/app/components/button";
import CommentBox from "@/app/blog/articles/[article]/components/commentSection/commentBox";
import RightSidebar from "@/app/blog/articles/components/right-sidebar";

import PostInfo from "./components/postInfo";

import CoverImage from "./components/coverImage";
import { getOnePost } from "@/app/api/_queries/getOnePost";
import CommentList from "./components/commentSection/commentList";

const UniqueBlog = async ({ params }) => {
  console.log(params.article);

  const post = await getOnePost(params.article);
  console.log(post.comments);

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
        {post ? (
          <div className="lg:w-[65%] overflow-scroll w-[100%] mt-5 md:px-7">
            <div className="w-full mb-5 relative bg-bgShade h-[20em] bg overflow-hidden">
              <CoverImage
                coverImageData={post.coverImageData}
                postTitle={post.title}
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
              {/* <div className="flex">
                <CustomButton
                  text="Previous Post"
                  value="previous"
                  fn={nextPrev}
                />
                <CustomButton text="Next Post" value="next" fn={nextPrev} />
              </div> */}
            </div>

            <CommentBox postId={params.article} />
            <CommentList comments={post.comments}/>
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

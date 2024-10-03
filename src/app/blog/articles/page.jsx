
import CoverImage from "./[article]/components/coverImage";
import axios from "axios";
import PostCollection from "./components/postCollection";
import { getOnePost } from "@/app/api/_queries/getOnePost";

const BlogPosts = async () => {
  // fetch first of a particlular day to use as news for the day.
  const response = await axios.get("http://localhost:3000/api/fetchPosts");
  const posts = response.data;
  const dayPost = posts[0];
  // console.log(dayPost);
  
  
  // const postId = '66ec2c35865205733725abf7'
  // const res = await getOnePost(postId);
  // const post = response.data;

  // console.log(res);

  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="h-[77vh] w-full bg-cover bg-center relative">
        <CoverImage
          coverImageData={dayPost.coverImageData}
          postTitle={dayPost.title}
        />
        <div className="z-[100] absolute bottom-5 md:max-w-[40em] p-3 text-center md:text-left md:right-5 text-white">
          <h1 className="md:text-[5rem] text-[3rem] font-bold">
            News for today!
          </h1>
          <p>{""}</p>
        </div>
        <div className="absolute top-0 h-full w-full bg-black opacity-70 z-10"></div>
      </div>
      <div className="py-8 px-3 md:px-14 rounded-[20px] bg-slate-50 w-[98%]">
        <div className="mb-5 md:ml-5">
          <h1 className="text-[1.2rem] text-center md:text-left font-bold">
            Latest Reads
          </h1>
        </div>
        <PostCollection posts={posts} />
      </div>
    </div>
  );
};

export default BlogPosts;

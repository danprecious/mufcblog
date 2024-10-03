import Image from "next/image"; 
import CoverImage from "../[article]/components/coverImage";

const LatestPostCard = ({ postTitle, thumbnail, author }) => {
  return (
    <div className="w-[100%]  bg-bgShade h-[16em]  hover:shadow-lg shadow-stone-600">
      <div className="w-full bg- relative  h-[10em] overflow-hidden">
        <CoverImage coverImageData={thumbnail} postTitle={postTitle} />
      </div>

      <div className="p-3">
        <div className="">
          <p className="text-[1.1rem] font-semibold">{postTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPostCard;

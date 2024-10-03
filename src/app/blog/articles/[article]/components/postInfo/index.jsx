import React from "react";

const PostInfo = ({ title, author, datePublished }) => {
  return (
    <div className="mb-5 bg- px-5 py-2">
      <div>
        <h1 className="text-[1.5rem] md:w-[70%] py-2 font-bold">
          {title ? title : ""}
        </h1>
      </div>
      <div>
        <p className="py-2">By {author ? author : ""}</p>
        <p className="text-xs">
          Published {datePublished ? datePublished : ""}
        </p>
      </div>
    </div>
  );
};

export default PostInfo;

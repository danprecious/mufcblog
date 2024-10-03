"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "./card";


const CardsDisplay = ({ posts }) => {
  const slicedPosts = posts.slice(0, 3);
  

  const handleClick = (post) => {
    dispatch({ type: "CURRENT_POST", payload: post });
  };

  return (
    <div className="custom-grid md:mt-[-5em] w-[90%]">
      {slicedPosts.map((post) => {
        return (
          <Link
            key={post.id}
            href={`/blog/articles/${post.id}`}
            onClick={() => handleClick(post)}
          >
            <Card
              title={post.title}
              thumbnail={post.coverImageData}
              author={"Author"}
              postDate={"Post date"}
            />
          </Link>
        );
      })}
      <div className="overflow-hidden h-full ">
        <Image
          src="/image5.png"
          alt="display image"
          width={200}
          height={50}
          priority={true}
          className=""
        />
      </div>
    </div>
  );
};

export default CardsDisplay;

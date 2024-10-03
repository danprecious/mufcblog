"use client";

import Image from "next/image";
import { useState } from "react";

const Analytics = ({ posts, community }) => {
  const [active, setActive] = useState("Posts");
  const [activeText, setActiveText] = useState("Blog posts");
  const [activeData, setActiveData] = useState(posts);

  const handleTypeClick = (e) => {
    let key = e.target.name;
    setActive(key);

    setActiveData(() => {
      if (key === "Posts") {
        return posts;
      } else if (key === "Community Members") {
        return community;
      }
    });

    setActiveText(() => {
      if (key === "Posts") { 
        return "Fetch posts here";
      } else if (key === "Community Members") {
        return "fetch Community members";
      } else if (key === "") {
        return "Nothing to be fetched";
      }
    });
  };

  const analyticsData = {
    Posts: {
      postData: posts,
    },
    "Community Members": {
      memberData: community,
    },
  };

  return (
    <div className="">
      <h1 className="text-[2rem] my-4">Analytics</h1>
      <div className="mb-8">
        <div>
          {Object.keys(analyticsData).map((key) => {
            return (
              <button
                key={key}
                name={key}
                onClick={handleTypeClick}
                className={`py-2 text-xs mr-4 sm:text-sm  border-secondary ${
                  active == key ? "border-b-2 border-black" : "text-stone-400"
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        {active == "Posts" ? (
          <div className="custom-grid px-4">
            {posts.map((post, index) => {
              

              return (
                <div key={post.id} className="lg:w-[12em] w-full bg-stone-900">
                  <div className="h-[12em] bg-stone-700 relative">
                    <Image width={100} height={100} className="object-cover w-full h-full" src={`data:image/jpeg;base64,${post.coverImageData}`} alt={`Cover-image for ${post.title}`} />
                  </div>
                  <div className=" h-[30%] text-sm px-2 py-5">
                    {post.title.slice(0, )}
                
                  </div>
                <div className="">
                    {post.sections.map((section) => {
                      return(
                        <div className="" key={section.id}>
                          {section.heading}
                          {section.content}
                        </div>
                      )
                    })}
                  </div>  

                </div>
              );
            })}
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default Analytics;

import React from "react";
import "./globals.css";

import CardsDisplay from "@/app/blog/articles/components/cardsDisplay";
import Hero from "@/app/components/hero";
import Link from "next/link";
import Header from "@/app/components/header";
import axios from "axios";

const Home = async () => {
  const response = await axios.get("http://localhost:3000/api/fetchPosts");
  const posts = response.data;

  return (
    <div className="">
      <Header />

      <div className="relative">
        <Hero />
        <div className="w-[100%] min-h-[25%] relative flex flex-col items-center justify-center">
          <div className="md:absolute left-8 top-0 p-4 font-semibold follow">
            <h3 className="font-extrabold">TOP STORIES</h3>
          </div>
          <div className="w-[90%] md:overflow-visible overflow-scroll flex justify-center rounded-[20px] p-5">
            <CardsDisplay posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

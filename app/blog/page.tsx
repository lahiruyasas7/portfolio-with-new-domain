import React19Post from "@/components/blog/React19Post";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

const Blog = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="pb-20 pt-36 w-full">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative">
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                     bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
          <div className="w-full max-w-5xl mx-auto md:px-4">
            <React19Post />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;

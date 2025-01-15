import DatePick from "@/components/home-components/date-choose/datepick";
import NewDateChoose from "@/components/home-components/date-choose/NewDateChoose";
import React from "react";

const HomeMain = ({ blogs }) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-12 md:py-16">
          <h1 className="text-3xl leading-[52px] font-bold md:text-4xl lg:text-5xl text-gray-800">
            Welcome to{" "}
            <span className="bg-sky-700 text-white px-2 py-1 rounded-md">
              UI Shots
            </span>
            , Your Creative Hub
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600 md:text-xl">
            Dive into a treasure trove of inspiration. Explore beautifully
            designed websites, insightful blogs, and actionable code snippets
            to elevate your creative projects.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/pages">
              <button className="text-md rounded-lg bg-gradient-to-br from-sky-600 to-sky-800 px-5 py-3 font-semibold text-white shadow-md hover:bg-gradient-to-tl hover:from-purple-500 hover:to-purple-700">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                  </svg>
                  Explore Inspiration
                </div>
              </button>
            </a>
            <a href="/submit">
              <button className="text-md rounded-lg border border-sky-700 px-5 py-3 font-semibold text-sky-700 hover:bg-blue-100 shadow-sm">
                Submit Your Work
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="home-main bg-white py-10">
        {/* Search Bar */}
        <div className="flex  gap-2 ">
        <div className="search-bar px-4 w-1/2">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-1/2">
          <NewDateChoose/>
        </div>
        </div>

        {/* Blog List */}
        <div className="blog-list grid gap-6 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="blog-card rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {blog.content}
                </p>
                <p className="mt-2 text-sm font-medium text-sky-600">
                  {blog.category?.category_name}
                </p>
                <p className="text-sm font-medium text-purple-600">
                  {blog.subCategory?.subcategory_name}
                </p>
                <button className="mt-4 inline-block rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">
                  Read More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No blogs found. Check back later!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeMain;

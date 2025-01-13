import React from "react";

const HomeMain = ({blogs}) => {
  return (
    <>
      <article className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-4/6 md:p-8">
            <span className="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">
              Tailwind
            </span>
            <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl">
              How to make comment card with tailwind?
            </p>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptate vero soluta voluptatum error non.
            </p>
            <button className="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
              Read More
            </button>
          </div>
          <div className="mx-auto hidden items-center px-5 md:flex md:p-8">
            <img
              className="rounded-md shadow-lg"
              src="/images/new.webp"
              alt="Shop image"
            />
          </div>
        </div>
      </article>

      <div className="home-main">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search blogs..." />
        </div>
        {/* Blog List */}
        <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            {/* <img src={blog.image} alt={blog.title} className="blog-image" /> */}
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p>{blog.category.category_name}</p>
              <p>{blog.subCategory.subcategory_name}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default HomeMain;

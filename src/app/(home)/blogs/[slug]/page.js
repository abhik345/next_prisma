"use client"

import { useEffect, useState } from 'react';

const generateSlug = (title) => {
  return title
    .toLowerCase() 
    .replace(/[^a-z0-9\s-]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-'); 
};

const BlogPage = ({ params }) => {
  const { slug } = params; // Get the slug from URL params

  // Example fake blog data
  const blogs = [
    {
      id: 1,
      title: 'The perfect summer sweater that you can wear!',
      category: 'Fashion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://tailwindcss.com/img/card-left.jpg',
    },
    {
      id: 2,
      title: 'Exploring the best coffee shops in town',
      category: 'Lifestyle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://tailwindcss.com/img/card-left.jpg',
    },
    {
      id: 3,
      title: 'A guide to starting your own tech startup',
      category: 'Business',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://tailwindcss.com/img/card-left.jpg',
    },
  ];

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Find the blog based on the slug
    const blog = blogs.find((b) => generateSlug(b.title) === slug);
    setBlogData(blog);
  }, [slug]);

  if (!blogData) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
        <p className="text-sm text-gray-600">{blogData.category}</p>
        <div
          className="mt-4 h-64 bg-cover text-center overflow-hidden"
          style={{ backgroundImage: `url(${blogData.imageUrl})` }}
          title={blogData.title}
        ></div>
        <p className="mt-6 text-gray-700">{blogData.description}</p>
      </div>
    </div>
  );
};

export default BlogPage;

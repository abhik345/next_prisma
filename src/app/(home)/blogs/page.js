import Link from 'next/link';
import React from 'react';


const generateSlug = (title) => {
  return title
    .toLowerCase() 
    .replace(/[^a-z0-9\s-]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-'); 
};

const page = () => {
  const blogs = [
    {
      id: 1,
      title: 'The perfect summer sweater that you can wear!',
      category: 'Fashion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imageUrl: 'https://tailwindcss.com/img/card-left.jpg',
    },
    {
      id: 2,
      title: 'Exploring the best coffee shops in town',
      category: 'Lifestyle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor quis urna blandit, sed consequat nunc viverra.',
      imageUrl: 'https://tailwindcss.com/img/card-left.jpg',
    },
    {
      id: 3,
      title: 'A guide to starting your own tech startup',
      category: 'Business',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, totam? Nisi consequatur cupiditate dolores libero commodi harum vel.',
      imageUrl: 'https://tailwindcss.com/img/card-left.jpg',
    },
  ];

  const recentBlogs = [
    {
      id: 1,
      title: 'Cristiano Ronaldo of Juventus FC looks dejected during the...',
      imageUrl:
        'https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=',
      date: 'Aug 18',
    },
    {
      id: 2,
      title: 'Barcelona v Bayern Munich',
      imageUrl:
        'https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=',
      date: 'Jan 18',
    },
    {
      id: 3,
      title: 'Cristiano Ronaldo of Juventus FC looks dejected during the...',
      imageUrl:
        'https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=',
      date: 'Aug 18',
    },
    {
      id: 4,
      title: 'Barcelona v Bayern Munich - UEFA Champions League',
      imageUrl:
        'https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=',
      date: 'July 23',
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
          <div className="sm:col-span-6">
            {/* All Blogs (Left Side) */}
            {blogs.map((blog) => (
              <div key={blog.id} className="mb-4">
                <Link href={`/blogs/${generateSlug(blog.title)}`}>
                  <div
                    className="h-56 bg-cover text-center overflow-hidden"
                    style={{
                      backgroundImage: `url(${blog.imageUrl})`,
                    }}
                    title={blog.title}
                  ></div>
                </Link>
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                  <div className="">
                    <a
                      href="#"
                      className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
                    >
                      {blog.category}
                    </a>
                    <Link
                      href={`/blogs/${generateSlug(blog.title)}`}
                      className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      {blog.title}
                    </Link>
                    <p className="text-gray-700 text-xs mt-2">{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:col-span-6">
            {/* Recent Blogs (Right Side) */}
            {recentBlogs.map((recent) => (
              <div key={recent.id} className="flex items-start mb-3 pb-3">
                <a href="#" className="inline-block mr-3">
                  <div
                    className="w-20 h-20 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${recent.imageUrl})`,
                    }}
                  ></div>
                </a>
                <div className="text-sm">
                  <p className="text-gray-600 text-xs">{recent.date}</p>
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                  >
                    {recent.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

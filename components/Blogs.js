import React from "react";
import Link from "next/link"
import { sanityClient, urlFor } from "../sanity"; // SanityClient and urlFor from sanity.js file

export default function Blogs({ blogs }) {
  console.log(blogs);
  return (
    // ()
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6 p-5 md:p-6 mx-auto mb-10 ">
      {blogs.map((blog) => (
        <div key={blog._id} className="my-2">
          <img
            className=" w-full md:w-96  md:h-96 object-cover rounded-3xl"
            src={urlFor(blog.mainImage).url()}
            alt=""
          />
          {/* <h3 className="font-poppins text-md my-3 bg-gray-200 w-fit text-center rounded-lg py-1 px-4 text-sm text-gray-500">
            {blog.category.name}
          </h3> */}
          <img
            className="w-14 h-14 lg:w-16 lg:h-16 mt-5 rounded-full xl:mx-0 object-cover bg-gray-200 "
            src={urlFor(blog.author.image).url()}
            alt="connection error"
          />
          <h3 className=" ml-16 lg:ml-20 -mt-12 lg:-mt-14 font-poppins text-md lg:text-xl text-green-500 font-medium">
            {blog.author.name}
          </h3>
          <h3 className="ml-16 lg:ml-20 font-poppins text-sm lg:text-md text-gray-900 font-medium ">
            {blog.author.role}
          </h3>
          <h1 className="font-poppins font-bold text-xl sm:text-2xl hover:underline transition-all mt-3">
          <Link href={`/blog/${blog.slug.current}`}>{blog.title}</Link>
          </h1>
          
          <h2 className="font-poppins text-md my-2 text-gray-900">
            {blog.description}
          </h2>
        </div>
        
      ))}
    </main>
  );
}



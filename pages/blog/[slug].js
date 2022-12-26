import React from "react";
import { sanityClient, urlFor } from "../../sanity"; // SanityClient and urlFor from sanity.js file
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import Head from "next/head";

export default function slug({ blog }) {
  console.log(blog);
  return (
    <article>
      {blog && (
        <div className=" mt-10 mx-5 sm:mx-20 ">
          <Head>
            <title>{blog.title}</title>
          </Head>
          <div>
            <h1 className="font-roboto-slab text-4xl sm:text-5xl lg:text-6xl max-w-3xl ">
              {blog.title}
            </h1>
            <h3 className="font-poppins text-sm md:text-lg my-5 max-w-3xl">
              {blog.description}
            </h3>
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
            <div className="w-72 md:w-96 bg-green-500 h-[2px] mt-10"></div>
            <div className="w-56 md:w-72 bg-green-500 h-[2px] mt-1"></div>
          </div>
        </div>
      )}
      <div className="font-roboto-slab mx-5 sm:mx-20 bg-gray-200 py-5 px-10 rounded-md max-w-3xl my-10">
        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={blog.body}
          serializers={{
            h1: (props) => (
              <h1
                className="text-2xl font-semibold sm:text-3xl mt-10 mb-5"
                {...props}
              />
            ),
            h4: (props) => <h4 className="text-lg sm:text-xl" {...props} />,
            li: ({ children }) => (
              <li className="list-disc ml-8 my-3 text-lg sm:text-xl">
                {children}
              </li>
            ),
            link: ({ href, children }) => (
              <a className="text-green-500 hover:underline" href={href}>
                {children}
              </a>
            ),
          }}
        />
      </div>
    </article>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const blog = await sanityClient.fetch(
    `*[_type == "blog" && slug.current == "${slug}"][0]{
      _id,
      title,
      author->{
        name,
        image,
        role,
      },
      description,
      mainImage,
      slug,
      publishedAt,
      body,
    }`
  );
  return {
    props: {
      blog,
    },
  };
};

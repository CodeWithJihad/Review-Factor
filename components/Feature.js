import React from "react";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity"; // SanityClient and urlFor from sanity.js file

export default function Feature({ feature }) {
  return (
    <section className=" flex container mx-auto my-14 hidden md:block ">
      {feature.map((feature) => (
        <div key={feature._id} className="flex container mx-auto">
          <div className="rounded-3xl mx-10 md:mx-auto ">
            <img
              className="w-[600px] h-fit  md:h-[450px] rounded-3xl object-cover bg-gray-100"
              src={urlFor(feature.mainImage).url()}
            />
          </div>
          <span className="w-[700px] lg:w-[600px] mt-5  mx-auto hidden md:block">
            {/* <h3 className="font-poppins text-lg text-gray-500 px-14 xl:px-0 ">
              Smartphone
            </h3> */}
            <h1 className="font-poppins text-3xl lg:text-4xl font-semibold break-words  pl-10 xl:px-0 py-2 cursor-pointer hover:underline">
            <Link href={`/blog/${feature.slug.current}`}>{feature.title}</Link>
            </h1>
            <h2 className="font-poppins my-5 px-10 xl:px-0 text-[14px] lg:text-[15px] lg:text-[16px] font-medium text-gray-900 ">
              {feature.description}
            </h2>
            <img
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full mx-10 xl:mx-0 object-cover bg-gray-200 "
              src={urlFor(feature.author.image).url()}
              alt="connection error"
            />
            <h3 className=" ml-28 lg:ml-32 xl:ml-20 -mt-12 lg:-mt-14 font-poppins text-md lg:text-xl text-green-500 font-medium">
              {feature.author.name}
            </h3>
            <h3 className="ml-28 lg:ml-32 xl:ml-20 font-poppins text-sm lg:text-md text-gray-900 font-medium ">
              {feature.author.role}
            </h3>
          </span>
        </div>
      ))}
    </section>
  );
}

// export const getServerSideProps = async () => {
//   const query = `*[ _type == "feature" ]{
//     _id,
//     title,
//     author->{
//       name,
//       image,
//       role,
//     },
//     description,
//     mainImage,
//     slug,
//     publishedAt,
//   }`;
//   const feature = await sanityClient.fetch(query);

//   return {
//     props: {
//       feature,
//     },
//   };
// };

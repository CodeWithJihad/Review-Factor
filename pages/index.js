import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Blogs from "../components/Blogs";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity"; // SanityClient and urlFor from sanity.js file

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs, feature }) {
  return (
    <div className="mx-auto container">
      <Head>
        <title>Review Factor</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature feature={feature} />
      <Blogs blogs={blogs} />
      {/* <Footer /> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "blog" ]{
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
  }`;
  const blogs = await sanityClient.fetch(query);

  const featurequery = `*[ _type == "feature" ]{
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
  }`;
  const feature = await sanityClient.fetch(featurequery);

  return {
    props: {
      blogs,
      feature,
    },
  };
};

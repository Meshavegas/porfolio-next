import React from "react";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaCommentDots } from "react-icons/fa6";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ClientSideRoute from "./ClientSideRoute";
const query = groq`
*[_type =='post']{
  ...,
  category[]->,
}`;
const BlogSection = async () => {
  const posts: Post[] = await client.fetch(query);
  return (
    <div>
      <div className=" text-center">
        <h2 className=" text-2xl">Our Blog</h2>
        <h1 className=" text-4xl text-primary font-extrabold capitalize">
          Our Recent update, blog tips, trick and more
        </h1>
      </div>
      <div className=" flex justify-between flex-wrap mt-5 ">
        {posts.map((blog, key) => (
          <BlogCard key={key} blog={blog} index={key} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

function BlogCard({ index, blog }: { index: number; blog: Post }) {
  // console.log(blog);

  return (
    <div
      className=" w-full md:w-[32%] mt-5 rounded-xl overflow-hidden shadow-lg"
      key={index}
    >
      <Image
        src={urlFor(blog.mainImage).url()}
        alt={blog.slug.current}
        className=" object-cover aspect-video hover:scale-110 transition duration-500 transform "
        width={500}
        height={300}
      />
      <div className="bg-white px-4 py-4">
        <div className=" flex justify-between text-sm">
          <p className=" flex items-center justify-between">
            {blog.category.map((value, key) => {
              return (
                <>
                  {blog.category.length - 1 > key ? (
                    <span key={key}>{value.title.substring(0, 15)} | </span>
                  ) : (
                    <span key={key}>{value.title.substring(0, 15)}</span>
                  )}
                </>
              );
            })}
          </p>
          <p className=" flex items-center justify-between">
            <CiCalendarDate className=" text-primary mr-2" />
            {new Date(blog._createdAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </p>
          <p className=" flex items-center justify-between">
            <FaCommentDots className=" text-primary mr-2" />
            {blog.comments?.length ? blog.comments?.length : 0} .comments
          </p>
        </div>
        <h1 className=" text-xl mt-2"> {blog.title}</h1>
        <p className=" mt-2 mb-6 line-clamp-4">{blog.description}</p>
        <ClientSideRoute route={`blogs/${blog.slug.current}`}>
          <span className=" underline text-xl text-primary">Read more</span>
        </ClientSideRoute>
      </div>
    </div>
  );
}

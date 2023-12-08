import React from "react";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaCommentDots } from "react-icons/fa6";
const BlogSection = () => {
  return (
    <div>
      <div className=" text-center">
        <h2 className=" text-2xl">Our Blog</h2>
        <h1 className=" text-4xl text-primary font-extrabold capitalize">
          Our Recent update, blog tips, trick and more
        </h1>
      </div>
      <div className=" flex justify-between flex-wrap mt-5 ">
        {blogs.map((blog, key) => (
          <div
            className=" w-full md:w-[32%] mt-5 rounded-xl overflow-hidden shadow-lg"
            key={key}
          >
            <Image
              src={blog.imageUrl}
              alt={blog.imageUrl}
              className=" object-cover aspect-video"
              width={500}
              height={300}
            />
            <div className="bg-white px-4 py-4">
              <div className=" flex justify-between text-sm">
                <p className=" flex items-center justify-between">
                  {blog.thematique.substring(0, 15)}
                </p>
                <p className=" flex items-center justify-between">
                  <CiCalendarDate className=" text-primary mr-2" />
                  {new Date(blog.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className=" flex items-center justify-between">
                  <FaCommentDots className=" text-primary mr-2" />
                  {blog.comment}.comments
                </p>
              </div>
              <h1 className=" text-xl mt-2"> {blog.title}</h1>
              <p className=" mt-2 mb-6">{blog.description}</p>
              <a href="#" className=" underline text-xl text-primary">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

const blogs = [
  {
    title: "How to make your website SEO friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptate e",
    imageUrl: "/infographie.png",
    date: new Date(),
    comment: 12,
    thematique: "SEO|Web Developement",
  },
  {
    title: "How to make your website SEO friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptate e",
    imageUrl: "/infographie.png",
    date: new Date(),
    comment: 12,
    thematique: "SEO|Web Developement",
  },
  {
    title: "How to make your website SEO friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptate e",
    imageUrl: "/infographie.png",
    date: new Date(),
    comment: 12,
    thematique: "SEO|Web Developement",
  },
  {
    title: "How to make your website SEO friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptate e",
    imageUrl: "/infographie.png",
    date: new Date(),
    comment: 12,
    thematique: "SEO|Web Developement",
  },
];

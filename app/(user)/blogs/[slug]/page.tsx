import urlFor from "@/lib/urlFor";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/Component/RichTextComponents";
type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    category[]->
  }`;

  const post: Post = await client.fetch(query, { slug });
  return (
    <div className="flex justify-center flex-col items-center">
      <div
        className="flex justify-center flex-col items-center relative"
        style={{ width: "80%" }}
      >
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.slug.current}
          className=" object-cover aspect-[3/1] w-full"
          height={1200}
          width={1600}
        />
        <div className=" px-[12.5%] bottom-0 absolute bg-gray-light">
          <span className=" text-white text-lg mt-2">
            {post.category.map((e, k) => (
              <span key={k} className="mr-5">
                {e.title}
              </span>
            ))}
          </span>
          <h1 className=" text-4xl font-bold text-white mt-5">{post.title}</h1>
          <h3 className=" text-xl text-white mt-5 mb-2">
            {new Date(post._createdAt).toLocaleDateString("en-EN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            - Written by {post.author.name}
          </h3>
        </div>
      </div>
      <div className=" w-[60%]">
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </div>
  );
}
export default Post;

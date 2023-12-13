import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className=" relative w-full h-96 m-10 mx-auto">
          <Image
            className=" object-contain aspect-[3/2]"
            src={urlFor(value).url()}
            alt="Blog Psot Image"
            fill
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className=" ml-10 py-2 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 py-2 list-decimal space-y-5">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className=" text-xl font-exo ">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className=" text-5xl py-5 font-bold font-exoBold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className=" text-4xl py-3 font-bold font-exoBold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className=" text-3xl py-3 font-bold font-exoBold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className=" text-2xl py-3 font-bold font-exoBold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className=" border-l-secondary border-l-4 pl-5 py-5 my-5 text-2xl font-exoitalic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-secondary hover:decoration-primary"
        >
          {children}
        </Link>
      );
    },
  },
};

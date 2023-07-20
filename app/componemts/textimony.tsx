import { getTestimony } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Image from "next/image";
import React from "react";
import { Title } from "./small/title";

export const Testimony = async () => {
  const testimony = await getTestimony();
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div className="px-4 md:px-20 py-20 bg-testimony-image bg-cover">
      <Title title="Testimony" isCenter="center" />
      <div className="text-4xl text-black font-extrabold text-center capitalize">
        what people say's about us
      </div>
      <div className="justify-center auto-rows-fr  mt-20 grid gap-3 grid-cols-1 xl:grid-cols-4 md:grid-cols-2">
        {testimony.map((value) => (
          <div className="rounded-xl shadow-lg p-6 bg-white">
            <div className="rating">
              <Rating
                style={{ maxWidth: 150 }}
                readOnly
                value={value.rate}
                itemStyles={myStyles}
              />
            </div>
            <div className="text-2x">
              <PortableText value={value.content} />
            </div>
            <div className="flex flex-row items-center">
              {value.image && (
                <Image
                  alt={value?.autheur}
                  src={value.image}
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-1/4 aspect-square mt-2"
                />
              )}
              <div className="flex flex-col ml-4">
                <div className="text-black text-2xl font-bold">
                  {value.autheur}
                </div>
                <div className="text-xl text-dark-grey">{value.poste}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

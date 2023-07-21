import { getServices } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Title } from "./small/title";

export const Service = async () => {
  const services = await getServices();

  return (
    <div className="h-1/2 my-20 md:mx-40 mx-4" id="services">
      <Title title="Services" isCenter="center" />
      <p className="text-2xl text-black text-justify">
        Notre agence offre des services de développement web et mobile complets.
        Avec une expertise dans la création de sites et d'applications
        interactifs, nous mettons l&apos;accent sur les interfaces utilisateur
        conviviales et l&apos;expérience utilisateur. Nous gérons également le
        développement backend, l&apos;intégration d&apos;API, la sécurité des
        données, la maintenance et l&apos;optimisation des performances. Faites
        confiance à notre équipe expérimentée pour concrétiser vos idées
        numériques et offrir des solutions sur mesure à vos besoins.
      </p>
      <div className="justify-center auto-rows-fr  mt-20 grid gap-3 grid-cols-1 xl:grid-cols-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.slug}
            className="p-6 group bg-light-grey border flex flex-auto flex-col cursor-pointer border-light rounded-lg shadow hover:bg-base"
          >
            <div className="justify-center flex h-20">
              <div className="bg-white w-20 md:h-10 rounded-full group-hover:bg-light">
                {service.image && (
                  <Image
                    src={service.image}
                    width={2000}
                    height={2000}
                    alt={service.name}
                    className="w-30 h-20"
                  />
                )}
              </div>
            </div>
            <div
              className="text-2xl font-semibold tracking-tight text-white text-center"
              key={service.slug}
            >
              {service.name}
            </div>
            <div className=" text-lg text-white mt-auto">
              <PortableText value={service.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

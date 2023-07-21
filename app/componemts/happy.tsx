import { getIllustration } from "@/sanity/sanity-utils";
import Image from "next/image";

export const Happy = async () => {
  const happyImage = await getIllustration("happy");
  return (
    <div
      id="task"
      className="bg-happy-image px-4 md:px-20 py-20 md:py-40 bg-cover md:bg-right flex flex-col md:flex-row justify-center md:justify-between items-center gap-3"
    >
      <div className="md:w-1/2 w-full">
        <div className="text-4xl text-light font-extrabold">
          Vous avez un projet, parlons-ens
        </div>
        <div className=" text-2xl text-white md:text-justify text-left">
          Bien sûr, voici un développement possible pour le titre "Vous avez un
          projet, parlons-en" en un seul paragraphe : Nous sommes une agence de
          développement web et mobile spécialisée dans la création de solutions
          personnalisées. Nous avons une équipe d'ingénieurs et de développeurs
          expérimentés qui peuvent vous aider à concrétiser votre projet, quel
          qu'il soit. Nous vous accompagnons tout au long du processus de
          développement, de l'analyse de vos besoins à la livraison de votre
          solution. Nous nous engageons à vous fournir une solution de qualité,
          à la fois fonctionnelle et esthétique. Contactez-nous dès aujourd'hui
          pour en savoir plus sur nos services.
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        {happyImage.image && (
          <Image
            src={happyImage.image}
            width={1000}
            height={1000}
            alt={happyImage.name}
            className=" w-1/2"
          />
        )}
      </div>
    </div>
  );
};

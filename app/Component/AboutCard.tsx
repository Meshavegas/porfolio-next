import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "./SingleTestimony";

export const AboutCard = () => {
  return (
    <div className=" mt-10 w-full">
      <h1 className=" text-3xl text-gray-light font-bold">About me</h1>
      <h2
        className=" text-3xl text-secondary font-bold
  "
      >
        Kwow about more
      </h2>
      <motion.p
        className=" text-xl leading-10 mt-5 text-justify"
        variants={slideVariants}
        initial={"hiddenRight"}
        animate="visible"
        exit="exit"
      >
        <p className="">
          Bienvenue dans mon univers ! Je suis{" "}
          <span className=" font-bold uppercase">lontchi loic steve</span>, un
          passionné du code avec une formation de qualité dans une école
          supérieure de renom. Mon expertise exceptionnelle s'étend du
          JavaScript au Java et au-delà, résultat d'une expérience
          professionnelle variée et enrichissante.
        </p>
        <p className="mt-3">
          Mon parcours m'a confronté à une diversité de défis, des projets
          innovants aux solutions créatives pour des problèmes complexes.
          Au-delà de mes compétences techniques, je valorise la communication
          transparente et la collaboration harmonieuse au sein des équipes.
          partagée.
        </p>
        <p className="mt-3">
          Explorez mon profil pour découvrir les facettes captivantes de mes
          réalisations. Prêt à apporter ma touche unique et mon expérience
          diversifiée à votre équipe, je suis convaincu que notre collaboration
          pourrait être la clé de nouveaux succès. Contactez-moi dès maintenant
          pour discuter des opportunités à venir !
        </p>
      </motion.p>
    </div>
  );
};

export default AboutCard;

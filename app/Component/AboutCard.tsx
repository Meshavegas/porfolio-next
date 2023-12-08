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
        className=" text-2xl leading-10 mt-5"
        variants={slideVariants}
        initial={"hiddenRight"}
        animate="visible"
        exit="exit"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        obcaecati dolor expedita exercitationem? Maxime dolorum ipsam, sed
        tenetur veritatis dolorem!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti
        qui fugit officia est dolor vitae expedita repellat quas laboriosam.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        nesciunt rerum labore libero quo sed ipsa, corporis aliquid numquam hic.
      </motion.p>
    </div>
  );
};

export default AboutCard;

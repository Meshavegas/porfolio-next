import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "./SingleTestimony";

function OneEducationItem({ key, item }: { item: any; key: number }) {
  return (
    <motion.div
      className=" bg-primary px-10 py-5 flex flex-col gap-3 mb-4 shadow-2xl rounded-3xl"
      key={key}
      variants={slideVariants}
      initial={"hiddenRight"}
      animate="visible"
      exit="exit"
    >
      <h1 className=" text-2xl text-white font-bold">{item.school}</h1>
      <div className=" text-xl text-white2 font-bold">
        <span>{item.startYr}</span>
        <span>-</span>
        <span className=" capitalize">{item.endYr}</span>
      </div>
      <h2 className=" text-xl text-white2 font-bold">{item.degree}</h2>
    </motion.div>
  );
}

export default OneEducationItem;

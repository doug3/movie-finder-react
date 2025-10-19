import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5 }}
      >
        <img
          src="./src/assets/filmreel.png"
          className="absolute top-100 animate-spin w-1/3 mx-auto"
          alt="Film Reel"
        />
      </motion.div>
    </>
  );
};

export default Contact;

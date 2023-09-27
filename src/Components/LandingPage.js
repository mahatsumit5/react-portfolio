import React from "react";
import mypic from "../assests/mypic.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { CustomModal } from "./customModal/CustomModal";
import { Weather } from "./weather/Weather";
const LandingPage = () => {
  return (
    <>
      <motion.div
        className="landingPage"
        id="hero"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Weather />
        <div className="intro">
          <motion.div
            initial={{ x: "-50vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <img src={mypic} alt="myic" />
          </motion.div>
          <h1> Hi, I am </h1>
          <h1 className="typewriter">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("Sumit Mahat.")
                  .deleteAll()
                  .pauseFor(2500)
                  .typeString("a Software Developer")
                  .deleteAll()
                  .typeString(" a Fullstack Developer")
                  .deleteAll()
                  .typeString(" a MERN stack Developer")
                  .start();
              }}
            />
          </h1>
          <motion.a
            initial={{ y: "90vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="button"
            whileHover={{
              scale: 1.1,
              boxShadow: "10px 10px 0 rgba(255, 255, 255, 0.3)",
            }}
          >
            <CustomModal /> <i className="fa-solid fa-arrow-right"></i>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;

import React from "react";
import video from "../assests/video.mp4";
import v from "../assests/dsaf.mp4";
import mypic from "../assests/mypic.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { ParticlesBackground } from "./particles/ParticlesBackground";

const LandingPage = () => {
  return (
    <>
      <ParticlesBackground className="d-sm-none" />

      <motion.div
        className="landingPage"
        id="hero"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* <video src={v} autoPlay loop muted playsInline /> */}
        <div className="intro">
          <motion.div
            initial={{ x: "-50vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <img src={mypic} alt="myic" />
          </motion.div>
          <h1> Hi, I am </h1>
          <h1 className="">
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
          <h2></h2>
          <motion.a
            initial={{ y: "90vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "keyframes" }}
            className="button"
            href="http://mail.google.com"
            target="blank"
          >
            Contact Me
            <i className="fa-solid fa-arrow-right"></i>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;

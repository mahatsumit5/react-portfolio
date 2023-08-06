import { useEffect, useRef } from "react";
import mypic from "../assests/mypic.png";
import { motion, useInView } from "framer-motion";
export const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <>
      <div ref={ref} className="about flex" id="about">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: isInView ? 0 : "-100vw" }}
          transition={{ duration: 0.5 }}
          className="darkheading shadow rounded p-2"
        >
          About Me
        </motion.h1>
        <div className="flex">
          <motion.div
            className="item1 flex"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <img src={mypic} alt=".pic." />
          </motion.div>
          <div className="item2 flex ">
            <motion.h2
              initial={{ x: "-100vw" }}
              animate={{ x: isInView ? 0 : "-100vw" }}
              transition={{ duration: 0.7 }}
              className=""
            >
              Professional Summary
            </motion.h2>
            <motion.p
              className="paragraph"
              initial={{ x: "-100vw" }}
              animate={{ x: isInView ? 0 : "-100vw" }}
              transition={{ duration: 1 }}
            >
              Software Engineer Graduate dedicated to improving skills through
              hands-on learning and development work. Proficient in mobile and
              desktop development environments. Adept at using HTML5, JavaScript
              and other programming languages to produce clean code.
              Well-organized and collaborative team player with strong
              communication and analytical abilities. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit voluptate ab deserunt quidem
              necessitatibus beatae dicta nulla iusto facilis aperiam!
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

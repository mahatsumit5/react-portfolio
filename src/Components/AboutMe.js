import mypic from "../assests/mypic.png";
import { motion } from "framer-motion";
export const AboutMe = () => {
  return (
    <>
      <div className="about flex" id="about">
        <h1 className="darkheading shadow rounded p-2">About Me</h1>
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
            <h2 className="">Professional Summary</h2>
            <p className="paragraph">
              Software Engineer Graduate dedicated to improving skills through
              hands-on learning and development work. Proficient in mobile and
              desktop development environments. Adept at using HTML5, JavaScript
              and other programming languages to produce clean code.
              Well-organized and collaborative team player with strong
              communication and analytical abilities. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit voluptate ab deserunt quidem
              necessitatibus beatae dicta nulla iusto facilis aperiam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

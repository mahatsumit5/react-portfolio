import { Button } from "react-bootstrap";
import pic from "../assests/mypic.png";
import { useState } from "react";
import { NavBar } from "./NavBar";
import { motion, useScroll } from "framer-motion";

export const Hero = () => {
  const paragraph = `Hello, I am Sumit Mahat and I am a graduate from Southern Cross
University(2022). I am a Software Developer by profession and I am
currently enrolled at Dented Code undertaking JRP to be a
Professional Software Developer. `;
  const paragraph2 = `Also, I am attending Professional
Year Program at QIBA. I am professional in using HTML, CSS,
JavaScript, BoostTrap, React and familiar with Angular.JS and
Node.Js.`;
  const [className, setClassName] = useState("paragraph1");
  const [button, setButtonName] = useState("Read More");
  const handleOnClick = () => {
    if (className === "paragraph1") {
      setClassName("paragraph");
      setButtonName("Read Less");
    } else {
      setClassName("paragraph1");
      setButtonName("Read More");
    }
  };
  return (
    <>
      <NavBar />
      <div className="hero flex" id="home">
        <div className="flex">
          <div className="flex">
            <h1>HI, I'M SUMIT MAHAT</h1>
            <h2>Full Stack Developer</h2>

            <div>
              <p className="paragraph">{paragraph}</p>
              <p className={className}>{paragraph2}</p>
              <Button variant="" onClick={handleOnClick} className="text-light">
                {button}
              </Button>
            </div>
            <div className="fluid flex">
              <motion.a
                href="../"
                className="button"
                target="_blank"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "10px 10px 0 rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                Download CV <i className="fa-solid fa-download"></i>
              </motion.a>
              <motion.a
                href="#projects"
                className="button"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "10px 10px 0 rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                Projects <i class="fa-solid fa-arrow-right"></i>
              </motion.a>
            </div>
          </div>
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 5 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={pic} alt="mypic" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

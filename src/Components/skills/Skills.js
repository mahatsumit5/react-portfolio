import { useState } from "react";
import "./skills.css";
import { BiLogoRedux, BiLogoTrello } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { motion, useDragControls } from "framer-motion";
export const Skills = () => {
  const controls = useDragControls();
  const skills = [
    {
      icon: "fa-brands html fa-html5",
      iName: "HTML",
    },
    {
      icon: "fa-brands css fa-css3-alt",
      iName: "CSS",
    },
    {
      icon: "fa-brands react fa-react",
      iName: "REACT",
    },
    {
      icon: "fa-brands github fa-github",
      iName: "GITHUB",
    },
    {
      icon: "fa-brands bootstrap fa-bootstrap",
      iName: "BOOTSTRAP",
    },
    {
      icon: "fa-brands js fa-square-js",
      iName: "JAVASCRIPT",
    },

    {
      icon: "fa-brands node fa-node-js",
      iName: "NodeJS",
    },
  ];
  const reactIcons = [
    {
      name: "Redux",
      icon: BiLogoRedux,
      className: "redux",
    },
    {
      name: "Trello",
      icon: BiLogoTrello,
      className: "trello",
    },
    {
      name: "Figma",
      icon: FiFigma,
      className: "figma",
    },
  ];

  return (
    <>
      <div className="skills flex " id="skills">
        <motion.h1
          drag="x"
          dragControls={controls}
          className="darkheading shadow-lg rounded p-2 "
        >
          Skills
        </motion.h1>
        <div className="flex ">
          {skills.map((item, index) => (
            <motion.div
              initial={{ y: 0 }}
              whileHover={{
                y: -50,
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
              }}
              className="p-3 d-flex justify-content-center align-items-center flex-column  shadow rounded gap-2 "
              key={index}
              style={{ height: "max-content" }}
            >
              <i className={item.icon}></i>
              <button className=" button"> {item.iName}</button>
            </motion.div>
          ))}
          {reactIcons.map(({ icon, name }, index) => {
            const Icon = icon;
            return (
              <>
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{
                    y: -100,
                    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                  }}
                  className="p-3 d-flex justify-content-center align-items-center flex-column  shadow rounded gap-2 "
                  key={index}
                  style={{ height: "max-content" }}
                >
                  <Icon />
                  <button className="button">{name}</button>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

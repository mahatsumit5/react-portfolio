import { useState } from "react";
import "./skills.css";
import { BiLogoRedux, BiLogoTrello } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { SiJira } from "react-icons/si";
import { motion, useDragControls } from "framer-motion";
import * as THREE from "three";
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
    className:
      "redux p-3 d-flex justify-content-center align-items-center flex-column  shadow rounded gap-2",
  },
  {
    name: "Trello",
    icon: BiLogoTrello,
    className:
      "trello p-3 d-flex justify-content-center align-items-center flex-column  shadow rounded gap-2",
  },
  {
    name: "Figma",
    icon: FiFigma,
    className:
      "figma p-3 d-flex justify-content-center align-items-center flex-column  shadow rounded gap-2",
  },
  {
    name: "Jira",
    icon: SiJira,
    className:
      "jira p-3 d-flex justify-content-center align-items-center flex-column  shadow rounded gap-2",
  },
];
export const Skills = () => {
  const controls = useDragControls();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
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
          {reactIcons.map(({ icon, name, className }, index) => {
            const Icon = icon;
            return (
              <>
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{
                    y: -100,
                    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                  }}
                  className={className}
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

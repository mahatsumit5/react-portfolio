import "./skills.css";
import { BiLogoRedux, BiLogoTrello } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
export const Skills = () => {
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
      <div className="skills flex" id="skills">
        <h1 className="darkheading shadow-lg rounded p-2 ">Skills</h1>
        <div className="flex gap-2">
          {skills.map((item, index) => (
            <div className="item" key={index}>
              <i className={item.icon}></i>
              <button className=" button"> {item.iName}</button>
            </div>
          ))}
          {reactIcons.map(({ icon, name }, index) => {
            const Icon = icon;
            return (
              <div className="item" key={index}>
                <Icon />

                <button className="button">{name}</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

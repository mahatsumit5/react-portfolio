import "./skills.css";
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
  return (
    <>
      <div className="skills flex" id="skills">
        <h1 className="darkheading shadow-lg rounded p-2 ">Skills</h1>
        <div className="flex gap-5">
          {skills.map((item, index) => (
            <div className="item" key={index}>
              <i className={item.icon}></i>
              <button className=" button"> {item.iName}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

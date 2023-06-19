export const Skills = () => {
  const skills = [
    {
      icon: "fa-brands fa-html5",
      iName: "HTML",
    },
    {
      icon: "fa-brands fa-css3-alt",
      iName: "CSS",
    },
    {
      icon: "fa-brands fa-react",
      iName: "REACT",
    },
    {
      icon: "fa-brands fa-github",
      iName: "GITHUB",
    },
    {
      icon: "fa-brands fa-bootstrap",
      iName: "BOOTSTRAP",
    },
    {
      icon: "fa-brands fa-square-js",
      iName: "JAVASCRIPT",
    },
    {
      icon: "fa-brands fa-node-js",
      iName: "NodeJS",
    },
  ];
  return (
    <>
      <div className="skills flex" id="skills">
        <h1 className="darkheading">Skills</h1>
        <div className="flex">
          {skills.map((item, index) => (
            <div className="item" key={index}>
              <i className={item.icon}></i>
              <button className="button">{item.iName}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

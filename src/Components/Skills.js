export const Skills = () => {
  return (
    <>
      <div className="skills flex" id="skills">
        <h1>Skills</h1>
        <div className="flex">
          <div className="item">
            <i className="fa-brands fa-html5"></i>
            <button className="button">HTML</button>
          </div>
          <div className="item">
            <i className="fa-brands fa-css3-alt"></i>
            <button className="button">CSS</button>
          </div>
          <div className="item">
            <i className="fa-brands fa-react"></i>
            <button className="button">REACT</button>
          </div>
          <div className="item">
            <i className="fa-brands fa-java"></i>
            <button className="button">JAVA</button>
          </div>
          <div className="item">
            <i className="fa-solid fa-database"></i>
            <button className="button">MONGO DB</button>
          </div>
          <div className="item">
            <i className="fa-brands fa-github"></i>
            <button className="button">GITHUB</button>
          </div>
        </div>
      </div>
    </>
  );
};

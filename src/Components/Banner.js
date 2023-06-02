export const Banner = () => {
  return (
    <>
      <div className="banner flex container" id="banner">
        <div>
          <div className="item flex">
            <span className="circle">
              <i className="fa-solid fa-trophy"></i>
            </span>
            <div className="text">
              <h2>IT</h2>
              <h3>Graduate</h3>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="item flex">
            <span className="circle">
              <i className="fa-solid fa-trophy"></i>
            </span>
            <div className="text">
              <h2>PROJECTS</h2>
              <h3>5++ PROJECTS</h3>
            </div>
          </div>

          <div className="info-divider"></div>
          <div className="item flex">
            <span className="circle">
              <i className="fa-solid fa-trophy"></i>
            </span>
            <div className="text">
              <h2>1Y</h2>
              <h3>EXPERIENCE</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

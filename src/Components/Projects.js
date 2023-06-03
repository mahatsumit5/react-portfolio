import image1 from "../assests/1.png";
import image2 from "../assests/2.png";
import image3 from "../assests/3.png";
import image4 from "../assests/4.png";
import image5 from "../assests/5.png";

export const Projects = () => {
  return (
    <>
      {" "}
      <div className="projects flex" id="projects">
        <h1>My Projects</h1>

        <div className="flex">
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image1} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h3>Personal Portfolio</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image2} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <a href="https://www.iconicstudio.net/" target="_blank">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </icon>
                <h3>Iconic Studio</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image3} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h3>Custome code Iconic</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image4} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h3>CV with wix</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image5} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h3>Parrallex</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image1} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h2>Personal Portfolio</h2>
                <p>April 23,2023</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image1} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h3>Personal Portfolio</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="card">
              <div className="front">
                <img src={image1} />
              </div>
              <div className="back">
                <icon>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </icon>
                <h3>Personal Portfolio</h3>
                <p>April 22, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

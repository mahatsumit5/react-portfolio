// import { faSliders } from "@fortawesome/free-solid-svg-icons";
import image1 from "../assests/1.png";
import image2 from "../assests/2.png";
import image3 from "../assests/3.png";
import image5 from "../assests/5.png";
import image6 from "../assests/6.png";
import image7 from "../assests/7.png";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Projects = () => {
  const projects = [
    {
      source: image1,
      alt: "Slider1",
      heading: "this is my heaing",
      description: "description",
      link: "",
    },
    {
      source: image2,
      alt: "Slider2",
      heading: "this is my heaing",
      description: "description",
    },
    {
      source: image3,
      alt: "slider3",
      heading: "this is my heaing",
      description: "description",
    },

    {
      source: image5,
      alt: "slider3",
      heading: "this is my heaing",
      description: "description",
    },
    {
      source: image6,
      alt: "slider3",
      heading: "this is my heaing",
      description: "description",
    },
    {
      source: image7,
      alt: "slider3",
      heading: "this is my heaing",
      description: "description",
    },
  ];
  return (
    <>
      <div className="projects flex" id="#projects">
        <h1>My Projects</h1>

        <Carousel className="">
          {projects.map((image, index) => (
            <Carousel.Item>
              <img
                key={index}
                className="d-block w-80"
                src={image.source}
                alt={image.alt}
              />
              <Carousel.Caption key={index}>
                <h3>{image.heading}</h3>
                <p>{image.description}</p>
                <i className="fa-brands fa-github"></i>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* 
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
        </div> */}
      </div>
    </>
  );
};

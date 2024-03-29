import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calculator from "../assests/calculator.png";
import dalle from "../assests/dale.png";
import chatbot from "../assests/chatbot.png";
import movieDB from "../assests/movieDB.png";
import ntdl from "../assests/ntdl.png";
import cms from "../assests/cms.jpg";
import ecommerce from "../assests/ecommerce.jpg";
import library from "../assests/library.png";
const Images = [
  {
    id: 1,
    src: calculator,
    alt: "Image 1",
    title: "React Calculator",
    description: "This Calculator was created using React Componentes.",
    chrome: "https://react-calculator-14ad89kd2-mahatsumit5.vercel.app/",
    github: "https://github.com/mahatsumit5/react-calculator.git",
  },
  {
    id: 1,
    src: dalle,
    alt: "Image 2",
    title: "DALLE Image Generation",
    description: "Built using OPENAI dalle API for image generation",
    chrome: "https://dalle-z6rw.onrender.com/",
    github: "https://github.com/mahatsumit5/OPENAI-DALLE.git",
  },

  {
    id: 4,
    src: chatbot,
    alt: "Image 4",
    title: "ChatBot",
    description: "This chat bot was created using OpenAI API.",
    chrome: "https://openai-api-clinent.vercel.app/",
    github: "https://vercel.com/mahatsumit5/openai-api-clinent",
  },

  {
    id: 6,
    src: movieDB,
    alt: "Image 6",
    title: "Movie Database",
    description:
      "The website uses movie API TO fetch data form the server and displays in the browser.",
    chrome: "https://movie-api-chi-nine.vercel.app/#",
    github: "https://github.com/mahatsumit5/movie-API.git",
  },
  {
    id: 7,
    src: ntdl,
    alt: "Image 7",
    title: "NOT-TO-DO-LIST",
    description: "Using this app you can keep track of your ",
    chrome: "https://not-todos-api.onrender.com/",
    github: "https://github.com/mahatsumit5/NOT-TODOS-FRONTEND",
  },
  {
    id: 8,
    src: library,
    alt: "Image of library app",
    title: "Library Management Application",
    description:
      "This app is MERN stack based application built using react and NODE.JS",
    chrome: "https://library-app-api.onrender.com",
    github: "https://github.com/mahatsumit5/library-App-API",
  },
  {
    id: 9,
    src: cms,
    alt: "Ecommerce management system",
    title: "Ecommerce Management System",
    description:
      "This website is built on NodeJS and React and is deployed on render. I have used JWT verification and S3 bucket for storing images.",
    chrome: "http://cfw-cms-website.s3-website-us-east-1.amazonaws.com/",
    github: "https://github.com/mahatsumit5/cfw_ecommerce_cms_api",
  },
  {
    id: 10,
    src: ecommerce,
    alt: "Ecommerce Store",
    title: "EcommerceStore",
    description:
      "This website is built on NodeJS and React and is deployed on render. I have used JWT verification and S3 bucket for storing images.",
    chrome: "http://ecommwebsite.s3-website-us-east-1.amazonaws.com/",
    github: "https://github.com/mahatsumit5/cfw-client-api",
  },
];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slideToScrool: 1,
  };

  return (
    <div className="content" id="projects">
      <h1 className="darkheading header  text-light  ">My Projects</h1>
      <div className="container d-flex justify-content-center">
        <Slider {...settings} className="d-flex w-75  gap-2">
          {Images.map((item) => (
            <div key={item.id} className="item d-flex flex-column  ">
              <img src={item.src} alt={item.alt} className="img" />
              <h2 className="title text-light p-2 ">{item.title}</h2>
              <p className="description text-light">{item.description}</p>
              <ul className="links">
                <li>
                  <a href={item.chrome} target="blank">
                    <i className="fa-brands fa-chrome text-light"></i>
                  </a>
                </li>
                <li>
                  <a href={item.github} target="blank">
                    <i className="fa-brands fa-github text-light"></i>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

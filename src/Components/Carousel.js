import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "./Carousel-Item";
import image1 from "../assests/1.png";
import image2 from "../assests/2.png";
import image3 from "../assests/3.png";
import image4 from "../assests/4.png";
import image5 from "../assests/5.png";
import image6 from "../assests/6.png";
import image7 from "../assests/7.png";
// const images = [image1, image2, image3, image5, image6, image7];
const Images = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
    title: "React Calculator",
    description: "This Calculator was created using React Componentes.",
    chrome: "https://react-calculator-14ad89kd2-mahatsumit5.vercel.app/",
    github: "https://github.com/mahatsumit5/react-calculator.git",
  },
  {
    id: 2,
    src: image2,
    alt: "Image 2 ",
    title: "Portfolio",
    description: "This portfolio was built using wix.",
    chrome: "",
    github: "",
  },
  {
    id: 3,
    src: image3,
    alt: "Image 3",
    title: "Iconic Studio landing page",
    description:
      "This was built using simple html page and designed using CSS.",
    chrome: "",
    github: "",
  },
  {
    id: 4,
    src: image4,
    alt: "Image 4",
    title: "ChatBot",
    description: "This chat bot was created using OpenAI API.",
    chrome: "https://openai-api-clinent.vercel.app/",
    github: "https://vercel.com/mahatsumit5/openai-api-clinent",
  },
  {
    id: 5,
    src: image5,
    alt: "Image 5",
    title: "Parrelex",
    description: "Parrelex effect using CSS.",
    chrome: "",
    github: "",
  },
  {
    id: 6,
    src: image6,
    alt: "Image 6",
    title: "Movie Database",
    description:
      "The website uses movie API TO fetch data form the server and displays in the browser.",
    chrome: "https://movie-api-chi-nine.vercel.app/#",
    github: "https://github.com/mahatsumit5/movie-API.git",
  },
  {
    id: 7,
    src: image7,
    alt: "Image 7",
    title: "NOT-TO-DO-LIST",
    description: "Using this app you can keep track of your ",
    chrome: "https://not-todos-frontend.vercel.app/",
    github: "https://github.com/mahatsumit5/NOT-TODOS-FRONTEND",
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

  // const renderImages = () =>
  //   images.map((image, index) => <CarouselItem key={index} image={image} />);
  return (
    <div className="content">
      <h1 className="header">My Projects</h1>
      <div className="container">
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="img" />
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <ul class="links">
                <li>
                  <a href={item.chrome} target="blank">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </li>
                <li>
                  <a href={item.github} target="blank">
                    <i class="fa-brands fa-github"></i>
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

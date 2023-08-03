import React from "react";
import video from "../assests/video.mp4";
import v from "../assests/dsaf.mp4";
import mypic from "../assests/mypic.png";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  console.log(Typewriter);
  return (
    <div className="landingPage" id="hero">
      <video src={v} autoPlay loop muted playsInline />

      <div className="intro">
        <div>
          <img src={mypic} alt="myic" />
        </div>
        <h1> Hi, I am </h1>
        <h1 className="">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              pauseFor: 1000,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Sumit Mahat.")
                .deleteAll()
                .pauseFor(2500)
                .typeString("a Software Developer")
                .deleteAll()
                .typeString(" a Fullstack Developer")
                .deleteAll()
                .typeString(" a MERN stack Developer")
                .start();
            }}
          />
        </h1>
        <h2></h2>
        <a className="button" href="http://mail.google.com" target="blank">
          Contact Me
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

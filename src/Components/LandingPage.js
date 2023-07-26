import React from "react";
import video from "../assests/video.mp4";
import v from "../assests/dsaf.mp4";
import Typewriter from "typewriter-effect/dist/core";
import mypic from "../assests/mypic.png";
const LandingPage = () => {
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .typeString("Hello World!")
        .callFunction(() => {
          console.log("String typed out!");
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log("All strings were deleted");
        })
        .start();
    }}
  />;
  return (
    <div className="landingPage" id="hero">
      <video src={v} autoPlay loop muted playsInline />

      <div className="intro">
        <div>
          <img src={mypic} alt="myic" />
        </div>
        <h1>Sumit Mahat</h1>
        <h2></h2>
        {typewriter}
        <a className="button" href="http://mail.google.com" target="blank">
          Contact Me
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

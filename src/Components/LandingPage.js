import React from "react";
import video from "../assests/video.mp4";
import v from "../assests/dsaf.mp4";
import mypic from "../assests/mypic.png";
const LandingPage = () => {
  return (
    <div className="landingPage" id="hero">
      <video src={v} autoPlay loop muted playsInline />

      <div className="intro">
        <div>
          <img src={mypic} alt="myic" />
        </div>
        <h1>Sumit Mahat</h1>
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

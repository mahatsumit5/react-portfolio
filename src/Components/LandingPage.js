import React from "react";
import video from "../assests/video.mp4";
import mypic from "../assests/mypic.png";
const LandingPage = () => {
  return (
    <div className="landingPage" id="hero">
      <video src={video} autoPlay loop muted playsInline />

      <div className="intro">
        <div>
          <img src={mypic} alt="myic" />
        </div>
        <h1>Sumit Mahat</h1>
        <h2>Full Stack Developer</h2>

        <button className="button">
          Hire me <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

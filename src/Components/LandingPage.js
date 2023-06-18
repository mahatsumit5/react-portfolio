import React from "react";
import video from "../assests/video.mp4";
import mypic from "../assests/mypic.png";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <video src={video} autoPlay loop muted playsInline />

      <div className="intro">
        <div>
          <img src={mypic}></img>
        </div>
        <h1>Sumit Mahat</h1>
        <h2>Full Stack Developer</h2>

        <button className="button">
          Hire me <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

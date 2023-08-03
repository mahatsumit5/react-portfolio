import { Button } from "react-bootstrap";
import pic from "../assests/mypic.png";
import { useState } from "react";
import { NavBar } from "./NavBar";

export const Hero = () => {
  const paragraph = `Hello, I am Sumit Mahat and I am a graduate from Southern Cross
University(2022). I am a Software Developer by profession and I am
currently enrolled at Dented Code undertaking JRP to be a
Professional Software Developer. `;
  const paragraph2 = `Also, I am attending Professional
Year Program at QIBA. I am professional in using HTML, CSS,
JavaScript, BoostTrap, React and familiar with Angular.JS and
Node.Js.`;
  const [className, setClassName] = useState("paragraph1");
  const [button, setButtonName] = useState("Read More");
  const handleOnClick = () => {
    if (className === "paragraph1") {
      setClassName("paragraph");
      setButtonName("Read Less");
    } else {
      setClassName("paragraph1");
      setButtonName("Read More");
    }
  };
  return (
    <>
      <NavBar />
      <div className="hero flex" id="home">
        <div className="flex">
          <div className="flex">
            <h1>HI, I'M SUMIT MAHAT</h1>
            <h2>Full Stack Developer</h2>

            <div>
              <p className="paragraph">{paragraph}</p>
              <p className={className}>{paragraph2}</p>
              <Button variant="" onClick={handleOnClick} className="text-light">
                {button}
              </Button>
            </div>
            <div className="fluid flex">
              <a href="../" className="button" target="_blank">
                Download CV <i className="fa-solid fa-download"></i>
              </a>
              <a href="#projects" className="button">
                Projects <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="flex">
            <img src={pic} alt="mypic" />
          </div>
        </div>
      </div>
    </>
  );
};

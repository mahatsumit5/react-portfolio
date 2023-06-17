import pic from "../assests/mypic.png";
import { Banner } from "./Banner";

export const Hero = () => {
  const paragraph = `Hello, I am Sumit Mahat and I am a graduate from Southern Cross
University(2022). I am a Software Developer by profession and I am
currently enrolled at Dented Code undertaking JRP to be a
Professional Software Developer. Also, I am attending Professional
Year Program at QIBA. I am professional in using HTML, CSS,
JavaScript, BoostTrap, React and familiar with Angular.JS and
Node.Js.`;
  return (
    <>
      <div className="hero flex" id="hero">
        <div className="flex">
          <div className="flex">
            <h1>HI, I'M SUMIT MAHAT</h1>
            <h2>Full Stack Developer</h2>

            <p>{paragraph}</p>
            <div className="fluid flex">
              <a href="../" className="button" target="_blank">
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
          <div className="flex">
            <img src={pic} alt="mypic" />
          </div>
        </div>
        {/* <Banner /> */}
      </div>
    </>
  );
};

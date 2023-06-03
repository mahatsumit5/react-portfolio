import pic from "../assests/mypic.png";
export const Hero = () => {
  return (
    <>
      <div className="hero flex" id="hero">
        <div className="flex">
          <div className="flex">
            <h1>HI, I'M SUMIT MAHAT</h1>
            <h2>Full Stack Developer</h2>

            <p>
              Hello, I am Sumit Mahat and I am a graduate from Southern Cross
              University(2022). I am a Software Developer by profession and I am
              currently enrolled at Dented Code undertaking JRP to be a
              Professional Software Developer. Also, I am attending Professional
              Year Program at QIBA. I am professional in using HTML, CSS,
              JavaScript, BoostTrap, React and familiar with Angular.JS and
              Node.Js.
            </p>
            <div className="flex">
              <a href="../" className="button2" target="_blank">
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
          <div>
            <img src={pic} />
          </div>
        </div>
      </div>
    </>
  );
};

import pic from "../assests/mypic.png";

export const Hero = () => {
  return (
    <>
      <div className="hero flex" id="hero">
        <div className="flex">
          <div className="flex">
            <h1>HI, I'M SUMIT MAHAT</h1>
            <h2>Website and Software Developer</h2>

            <p>
              Hello Hi, I am Sumit Mahat and I am a graduate from Southern Cross
              University(2022). I am a Software Developer by profession and I am
              currently enrolled at Dented Code undertaking JRP to be a
              professional Software Developer. Also, I am attending professional
              Year Program at QIBA. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis laboriosam neque eum illo architecto
              maiores velit aliquam, impedit incidunt ea, animi sapiente.
              Recusandae ad quam ratione nisi! Quae totam officia eum
              necessitatibus fuga sint rerum eos. Nihil excepturi repudiandae
              consectetur iusto eveniet dolorum iste amet, autem enim asperiores
              dicta optio! I am professional in using HTML, CSS, JavaScript,
              BoostTrap and familiar with Angular.JS nd Node.Js. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quos pariatur
              asperiores optio similique aperiam in? Ipsam, vitae expedita enim
              dolorem eligendi corporis numquam deserunt maxime et. Nemo vitae
              recusandae error.
            </p>
            <div className="flex">
              <a
                href="./SUMIT_Mahat_Resume.docx"
                className="button2"
                target="_blank"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
              <button className="button2">Hire ME</button>
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

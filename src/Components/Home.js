import video from "../assests/video.mp4";
export const Home = () => {
  return (
    <>
      <section>
        {/* <div className="videoContainer">
          <video src={video} autoPlay loop muted playsInline />
        </div> */}

        <div className="intro">
          <h1>Sumit Mahat</h1>
          <h1>Full Stack Developer</h1>
          <br></br>
          <h3>Sydney, Australia</h3>
          <br></br>
          <p>
            Hello,my name is Sumit Mahat,nice to meet you and I would like to
            welcome you to my personal portfolio.
          </p>
          <hr />
          <button className="button">
            Hire me <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

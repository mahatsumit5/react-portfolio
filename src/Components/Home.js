import video from "../assests/video.mp4";
export const Home = () => {
  return (
    <>
      <section>
        <video src={video} autoPlay loop muted playsInline />

        <div>
          <h1>Sumit Mahat</h1>
          <h2>Full Stack Developer</h2>
          <h3>Sydney, Australia</h3>
          <br></br>
          <p>
            Hello,my name is Sumit Mahat,nice to meet you and I would like to
            welcome you to my personal portfolio.
          </p>
          <hr />
          <button className="button2">
            View my Work <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

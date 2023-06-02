import pic from "../mypic.png";
import video from "../assests/video.mp4";
export const Home = () => {
  return (
    <>
      <section>
        <video src={video} autoPlay loop muted />

        <div>
          <h1>Sumit Mahat</h1>
          <h2>Full Stack Developer</h2>
          <hr></hr>
          <h4>Sydney, Australia</h4>
          <br></br>
          <p>
            Hello,my name is Sumit Mahat,nice to meet you and I would like to
            welcome you to my personal portfolio.
          </p>
          <hr />
          <button className="button2">Hire me</button>
        </div>
      </section>
    </>
  );
};

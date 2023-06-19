import mypic from "../assests/mypic.png";

export const AboutMe = () => {
  return (
    <>
      <div className="about flex" id="about">
        <h1 className="darkheading">About Me</h1>
        <div className="flex">
          <div className="item1 flex">
            <img src={mypic} alt=".pic." />
          </div>
          <div className="item2 flex">
            <h2>Professional Summary</h2>

            <p className="paragraph">
              Software Engineer Graduate dedicated to improving skills through
              hands-on learning and development work. Proficient in mobile and
              desktop development environments. Adept at using HTML5, JavaScript
              and other programming languages to produce clean code.
              Well-organized and collaborative team player with strong
              communication and analytical abilities. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit voluptate ab deserunt quidem
              necessitatibus beatae dicta nulla iusto facilis aperiam!
            </p>

            <h1>Work Life Balance</h1>
            <ul className="paragraph">
              <li>Coding</li>
              <li>Guitar</li>
              <li>Music</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

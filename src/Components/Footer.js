export const Footer = () => {
  return (
    <>
      <footer>
        <div className="div1 flex">
          <div className="link1">
            <h3>Social Links</h3>
            <ol className="links">
              <a href="www.facebook.com">
                {" "}
                <li>Facebook</li>
              </a>
              <a href="www.linkedin.com">
                <li>LinkedIn</li>
              </a>
              <a href="www.instagram.com">
                <li>Instagram</li>
              </a>
              <a href="www.telegram.com">
                <li>Telegram</li>
              </a>
            </ol>
          </div>
          <div className="link2">
            <h3>Links</h3>
            <ol>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="div2">Copyrights To Sumit Mahat</div>
      </footer>
    </>
  );
};

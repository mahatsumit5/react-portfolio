export const Footer = () => {
  return (
    <>
      <footer>
        <div className=" div1 flex">
          <div className="link1">
            <h3>Get in Touch with Me</h3>
            <ol className="links">
              <a href="www.facebook.com">
                {" "}
                <li>
                  {" "}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
              </a>
              <a href="www.linkedin.com">
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/mahat-sumit-9421381a3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </a>
              <a href="www.instagram.com">
                <li>
                  {" "}
                  <a
                    href="https://www.instagram.com/mahatsumit99"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </a>
              <a href="www.telegram.com">
                <li>
                  {" "}
                  <a
                    href="https://www.telegram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
              </a>
            </ol>
          </div>
        </div>
        <div className="div2">Copyrights To Sumit Mahat</div>
      </footer>
    </>
  );
};

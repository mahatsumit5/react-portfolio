export const Contact = () => {
  return (
    <>
      {" "}
      <div className="contact flex" id="contact">
        <h1>Contact me</h1>
        <div className="item1 flex">
          <div className="icons2">
            <a
              href="https://www.linkedin.com/in/mahat-sumit-9421381a3/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="icons3">
            <a href="https://www.instagram.com/mahatsumit99" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="icons4">
            <a href="https://www.facebook.com" target="_blank">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
          <div className="icons5">
            <a href="https://www.telegram.com" target="_blank">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
        <h1>OR</h1>

        <div className="item2 flex">
          <a href="mailto:mahatsumit5@gmail.com" target="_blank">
            mahatsumit5@gmail.com
          </a>

          <i className="fa-regular fa-envelope"></i>
        </div>
        <form action="submit-form.php" method="get">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

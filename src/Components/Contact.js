export const Contact = () => {
  return (
    <>
      {" "}
      <div className="contact flex" id="contact">
        <h1> Want to get in touch?</h1>
        <h1> Drop me a line!</h1>

        <div className="item2 flex">
          <a
            href="mailto:mahatsumit5@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            mahatsumit5@gmail.com
          </a>

          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="container-fluid">
          <form action="submit-form.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <input type="submit" value="Send" />
          </form>
          <div>image</div>
        </div>
      </div>
    </>
  );
};

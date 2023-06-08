import Button from "react-bootstrap/Button";
export const Contact = () => {
  return (
    <>
      {" "}
      <div className="container-fluid contact flex" id="contact">
        <h1> Want to get in touch?</h1>
        <h1> Drop me a line!</h1>

        <div className="container-fluid">
          <form action="submit-form.php" method="post">
            <label for="name">Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
            />
            <label for="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              required
            />
            <label for="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              required
            ></textarea>
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </>
  );
};

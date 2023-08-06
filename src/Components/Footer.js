import { GoUp } from "./GoUp";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
      >
        <div className=" div1 flex">
          <div className="link1">
            <h3>Get in Touch with Me</h3>
            <ol className="links">
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
            </ol>
          </div>
        </div>
        <div className="div2">Copyrights To Sumit Mahat</div>
        <GoUp />
      </motion.footer>
    </>
  );
};

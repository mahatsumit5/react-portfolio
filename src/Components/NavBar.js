export const NavBar = () => {
  return (
    <header>
      <div className="container flex header" id="header">
        <div className="logo flex container">
          <h1>Sumit Mahat</h1>|<h1>Soft. Developer</h1>
        </div>

        <div className="menu">
          <label for="check" className="menu-icon" id="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>

          <ul className="navigation flex">
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
            <li>
              <a href="gallery.html" target="_self">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <input type="checkbox" id="check" onclick="onClicked()" />
        <div className="side-bar" id="side-bar">
          <button id="button" onclick="toggleMenu()">
            <a href="#hero" id="clicked"></a>
            Home
          </button>

          <button id="button" onclick="Clicked()">
            <a href="#skills" id="clicked">
              Skills
            </a>
          </button>

          <button id="button" onclick="Clicked()">
            <a href="#projects" id="clicked">
              Projects
            </a>
          </button>

          <button id="button" onclick="Clicked()">
            <a href="#about" id="clicked">
              About
            </a>
          </button>

          <button id="button" onclick="Clicked()">
            <a href="#contact" id="clicked">
              Contact
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

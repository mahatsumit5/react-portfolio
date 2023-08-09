import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/logo.png";
export const NavBar = () => {
  const menuItems = [
    {
      href: "#home",
      label: "Home",
    },

    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#about",
      label: "About Me",
    },
  ];
  return (
    <header>
      <Navbar
        className="d-flex jusitfy-content-center"
        expand="lg"
        sticky="top"
      >
        <Container fluid>
          <div>
            <Navbar.Brand href="#">
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md}`}
            className="mx-2"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Nav>
              {menuItems.map((item, index) => (
                <Nav.Link key={index} href={item.href}>
                  <i className={item.icon}></i>
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

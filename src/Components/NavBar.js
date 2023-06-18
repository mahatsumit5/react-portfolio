import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const NavBar = () => {
  const menuItems = [
    {
      href: "/home",
      label: "Home",
    },
    {
      href: "/skills",
      label: "Skills",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About Me",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];
  return (
    <header>
      <Navbar
        className="d-flex jusitfy-content-center"
        expand="lg"
        sticky="top"
      >
        <Container fluid p-5>
          <div>
            <Navbar.Brand href="#">Sumit Mahat | Portfolio</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Nav>
              {menuItems.map((item, index) => (
                <Nav.Link key={index} href={item.href}>
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

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
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Sumit Mahat | Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Nav
              className="me-auto my-2 my-lg-0 m-2"
              style={{ maxHeight: "100px" }}
            >
              {menuItems.map((item) => (
                <Nav.Link href={item.href}>{item.label}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

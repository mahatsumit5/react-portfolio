import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/logo.png";
import { useState } from "react";
export const NavBar = () => {
  const menuItems = [
    {
      href: "#home",
      label: "Home",
      icon: "fa-solid fa-house",
    },
    {
      href: "#skills",
      label: "Skills",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#about",
      label: "About Me",
    },
    {
      href: "#contact",
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
        <Container fluid>
          <div>
            <Navbar.Brand href="#">
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md}`} />
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

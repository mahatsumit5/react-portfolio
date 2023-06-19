import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { NavBar } from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import { Skills } from "./Components/Skills";
import { SideMenu } from "./Components/SideMenu";
// import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Source } from "./Components/SourceCode";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Components/Carousel";
import "./App.css";
import { Container } from "react-bootstrap";
// import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  return (
    <Container fluid m-0>
      <LandingPage />
      <NavBar />
      <SideMenu />
      <Hero />
      <Skills />
      <AboutMe />

      <Carousel />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;

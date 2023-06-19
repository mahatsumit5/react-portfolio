import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { NavBar } from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import { Skills } from "./Components/Skills";
import { SideMenu } from "./Components/SideMenu";
import { AboutMe } from "./Components/AboutMe";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Components/Carousel";
import "./App.css";
import { Container } from "react-bootstrap";

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

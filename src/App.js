import { Hero } from "./Components/Hero";
import LandingPage from "./Components/LandingPage";
import { Skills } from "./Components/skills/Skills";
import { SideMenu } from "./Components/SideMenu";
import { AboutMe } from "./Components/AboutMe";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Components/Carousel";
import "./CSS/App.css";
import "./CSS/weather.css";
import { Container } from "react-bootstrap";

// import { Weather } from "./Components/weather/Weather";
import { ParticlesBackground } from "./Components/particles/ParticlesBackground";
function App() {
  return (
    <>
      <ParticlesBackground />

      <Container fluid>
        <LandingPage />
        <SideMenu />
        <Hero />
        <Skills />
        <AboutMe />
        {/* <Weather /> */}
        <Carousel />
        <Footer />
      </Container>
    </>
  );
}

export default App;

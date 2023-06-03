import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Source } from "./Components/SourceCode";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero" element={<Hero />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <NavBar />

      <Hero />

      <Skills />

      <Projects />

      <AboutMe />

      <Contact />
      <Source />
      <Footer />
    </div>
  );
}

export default App;

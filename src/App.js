import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <Hero />

      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <SocialLinks />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </>
  );
}

export default App;

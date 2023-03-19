import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading ? (
        <Loader typingFinish={() => setLoading(false)} />
      ) : (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

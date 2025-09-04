import { BrowserRouter, Routes, Route } from "react-router";
import Appbar from "./Appbar";
import Home from "./Screens/Home";
import Articles from "./Screens/Articles";
import Projects from "./Screens/Projects";
import Skills from "./Screens/Skills";
import About from "./Screens/About";
import Footer from "./Footer";

function App() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2 md:gap-0 md:bg-neutral-950">
      <BrowserRouter>
        <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </main>
  );
}

export default App;

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Testimonial from "./components/sections/Testimonials";
import Industries from "./components/sections/Industries";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonial />
      <Industries />
      <Footer />
    </>
  );
}

export default App;

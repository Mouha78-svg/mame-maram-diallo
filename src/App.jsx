import About from "./components/About";
import Familles from "./components/Familles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Sousfilsabdoundiaye from "./components/Sousfilsabdoundiaye";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Familles />
      <Sousfilsabdoundiaye />
      <Tours />
      <Footer />
    </>
  );
}

export default App;

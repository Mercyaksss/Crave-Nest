import Hero from "./sections/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import About from "./sections/About/About";
import Gallery from "./sections/Gallery/Gallery";
import Footer from "./sections/Footer/Footer";
import FAQ from "./sections/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <FAQ/>
      <Footer/>
    </main>
  );
}

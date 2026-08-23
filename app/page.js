import Hero from "./sections/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import About from "./sections/About/About";
import Gallery from "./sections/Gallery/Gallery";
import Footer from "./sections/Footer/Footer";
import EventCTA from "./sections/EventCTA/EventCTA";
import FAQ from "./sections/FAQ/FAQ";
import Menu from "./sections/Menu/Menu";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Gallery/>
      <FAQ/>
      <EventCTA/>
      <Footer/>
    </main>
  );
}

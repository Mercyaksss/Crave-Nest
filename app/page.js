import Hero from "./sections/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import About from "./sections/About/About";
// import Gallery from "./sections/Gallery/Gallery";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Gallery/> */}
    </main>
  );
}

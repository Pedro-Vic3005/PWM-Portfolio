import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Forca from "./components/forca";

export default function Home(){
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Forca/>
      <Footer/>
    </div>
  );
}
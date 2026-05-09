import Hero from "../components/Home/Hero/Hero";
import OurStory from "../components/OurStory/OurStory";
import OurServices from "../components/OurServices/OurServices";
import Footer from '../components/Home/Footer/Footer'
export default function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <OurStory />
        <OurServices />
        <Footer/>
      </main>
    </>
  );
}

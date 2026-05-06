import Hero from "../components/Home/Hero/Hero";
import Navbar from "../components/Home/Navbar/Navbar";
import OurStory from "../components/OurStory/OurStory";
import OurServices from "../components/OurServices/OurServices";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <OurStory />
        <OurServices />
      </main>
    </>
  );
}

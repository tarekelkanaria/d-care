import Hero from "../components/Home/Hero/Hero";
import OurStory from "../components/Home/OurStory/OurStory";
import OurServices from "../components/Home/OurServices/OurServices";
import StartYJ from "../components/StartYourJourney/syj";

export default function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <OurStory />
        <OurServices />
        <StartYJ />
      </main>
    </>
  );
}

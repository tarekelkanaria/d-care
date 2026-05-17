import Hero from "../components/Home/Hero/Hero";
import OurStory from "../components/Home/OurStory/OurStory";
import OurServices from "../components/Home/OurServices/OurServices";
import PatientStories from "../components/Home/Hero/PatientStories/PatientStories";
export default function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <OurStory />
        <OurServices />
        <PatientStories />  
      </main>
    </>
  );
}

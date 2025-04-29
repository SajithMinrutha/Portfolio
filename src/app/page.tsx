import AboutMe from "@/components/AboutMe";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import Education from "@/components/Education";
export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Education />
    </main>
  );
}

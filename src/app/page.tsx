import AboutMe from "../components/AboutMe";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}

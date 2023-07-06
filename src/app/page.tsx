import Background from "@/components/Background";
import Intro from "@/components/Intro";
import SelfSummary from "@/components/SelfSummary";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Homepage() {
  return (
    <>
      <Background />
      <main>
        <Intro />
        <SelfSummary />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

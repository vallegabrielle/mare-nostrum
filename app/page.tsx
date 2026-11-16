import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Story } from "@/components/Story";
import { MenuSection } from "@/components/MenuSection";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Reveal />
      <Header />
      <Hero />
      <Ticker />
      <Story />
      <MenuSection />
      <Manifesto />
      <Footer />
    </main>
  );
}

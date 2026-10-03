import Hero from "./components/Hero";
import Sliders from "./components/Sliders";
import Features from "./components/Features";
import Compatible from "./components/Compatible";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main style={{ background: "#000", minHeight: "100vh" }}>
      <Hero />
      <Sliders />
      <Features />
      <Compatible />
      <Pricing />
      <Testimonials />
      <FAQ />
    </main>
  );
}

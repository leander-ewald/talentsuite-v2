import HeroSection from "@/components/sections/HeroSection";
import TrustedBrands from "@/components/sections/TrustedBrands";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Campaigns from "@/components/sections/Campaigns";
import Blogs from "@/components/sections/Blogs";
import Process from "@/components/sections/Process";
import Faqs from "@/components/sections/Faqs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBrands />
      <About />
      <Services />
      <Testimonials />
      <Campaigns />
      <Blogs />
      <Process />
      <Faqs />
    </>
  );
}

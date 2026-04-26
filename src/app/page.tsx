import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs24K",
  description: "Desarrollamos sistemas de IA que analizan, automatizan y optimizan funciones clave como marketing, ventas, soporte y administración interna. Nuestro enfoque convierte tus datos en decisiones precisas, reduce tiempos operativos y genera una productividad superior. Mientras la IA gestiona lo repetitivo, tu equipo puede concentrarse en estrategias de crecimiento, innovación y creación de valor real.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}

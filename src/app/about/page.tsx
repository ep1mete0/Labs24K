import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Labs 24K"
        description="En Labs 24K transformamos procesos, negocios y marcas mediante soluciones de inteligencia artificial implementadas de forma real, estratégica y medible. Impulsamos la evolución digital de las empresas con herramientas inteligentes, automatización avanzada y tecnología diseñada a la medida de cada proyecto."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

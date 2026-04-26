import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Cómo reducir el CAC con automatización de marketing basada en IA",
    paragraph:
      "Descubre el enfoque práctico para optimizar campañas, segmentar mejor audiencias y reducir costos de adquisición sin sacrificar volumen de conversiones.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Carolina Méndez",
      image: "/images/blog/author-03.png",
      designation: "Directora de Growth",
    },
    tags: ["marketing", "ia", "growth"],
    publishDate: "Mar 2026",
  },
  {
    id: 2,
    title: "Arquitectura de datos para modelos predictivos de conversión",
    paragraph:
      "Una guía para estructurar fuentes de datos, eventos y métricas clave que permitan entrenar modelos robustos y accionables en entornos empresariales.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Javier Ortega",
      image: "/images/blog/author-02.png",
      designation: "Lead Data Strategist",
    },
    tags: ["data", "prediccion", "conversion"],
    publishDate: "Abr 2026",
  },
  {
    id: 3,
    title: "Implementación de IA en 90 días: estrategia, ejecución y medición",
    paragraph:
      "Revisa un plan por fases para pasar de la idea a producción con validación continua, ajustes operativos y tableros ejecutivos para toma de decisiones.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Sofía Ramírez",
      image: "/images/blog/author-03.png",
      designation: "Consultora Senior en IA",
    },
    tags: ["estrategia", "implementacion", "empresa"],
    publishDate: "Abr 2026",
  },
];
export default blogData;

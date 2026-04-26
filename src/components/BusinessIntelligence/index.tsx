import SectionTitle from "../Common/SectionTitle";

const businessSolutions = [
  {
    title: "Contabilidad y Facturas Sin Manos",
    description:
      "Automatiza lectura, clasificación y carga de facturas en tu sistema de gestión para reducir tiempos administrativos.",
  },
  {
    title: "Gestión de Correos y Agenda",
    description:
      "Prioriza emails, responde consultas frecuentes y organiza reuniones de forma automática según urgencia comercial.",
  },
  {
    title: "Documentos y Contratos Inteligentes",
    description:
      "Genera presupuestos, contratos e informes en minutos con plantillas asistidas por IA y control de calidad.",
  },
  {
    title: "Ventas y Atención 24/7",
    description:
      "Implementa agentes conversacionales que responden clientes, califican oportunidades y agendan citas sin fricción.",
  },
  {
    title: "Atención Telefónica con IA",
    description:
      "Incorpora voz natural para resolver dudas, registrar pedidos y dar continuidad comercial fuera del horario laboral.",
  },
  {
    title: "Análisis de Intención del Cliente",
    description:
      "Analiza reseñas, conversaciones y señales de mercado para detectar tendencias y lanzar productos con mayor acierto.",
  },
];

const BusinessIntelligence = () => {
  return (
    <section id="business-intelligence" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Sección 1: Inteligencia para el Negocio"
          paragraph="Soluciones para PYMES y empresas con foco en vender más y trabajar con menos carga operativa."
          center
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((solution) => (
            <article
              key={solution.title}
              className="rounded-sm border border-body-color/15 bg-white p-6 shadow-one transition hover:shadow-two dark:border-white/10 dark:bg-gray-dark"
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                {solution.title}
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligence;

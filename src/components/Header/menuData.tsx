import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    submenu: [
      {
        id: 2,
        title: "Nosotros",
        path: "/about",
        newTab: false,
      },
      {
        id: 33,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 3,
        title: "Contacto",
        path: "/contact",
        newTab: false,
      }
    ],
    newTab: false,
  },
  {
    id: 4,
    title: "Agentes IA",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Marketing",
        path: "#",
        newTab: false,
      },
      {
        id: 42,
        title: "Turismo y Hotelería",
        path: "#",
        newTab: false,
      },
      {
        id: 43,
        title: "Ventas",
        path: "#",
        newTab: false,
      },
      {
        id: 44,
        title: "Seguros",
        path: "#",
        newTab: false,
      },
      {
        id: 45,
        title: "Retail y E-commerce",
        path: "#",
        newTab: false,
      },
      {
        id: 46,
        title: "Ciberseguridad",
        path: "#",
        newTab: false,
      },
      {
        id: 47,
        title: "Educación",
        path: "#",
        newTab: false,
      },
      {
        id: 48,
        title: "BackOffice",
        path: "#",
        newTab: false,
      },
      {
        id: 49,
        title: "Finanzas",
        path: "#",
        newTab: false,
      },
      {
        id: 50,
        title: "Logística",
        path: "#",
        newTab: false,
      },
      {
        id: 51,
        title: "Agricultura",
        path: "#",
        newTab: false,
      },
      {
        id: 52,
        title: "Recursos Humanos",
        path: "#",
        newTab: false,
      },
      {
        id: 53,
        title: "Industria Legal",
        path: "#",
        newTab: false,
      },
      {
        id: 54,
        title: "Whatsapp",
        path: "#",
        newTab: false,
      }
    ],
  },
  {
    id: 123,
    title: "Marketing y gestion de clientes",
    path: "#",
    newTab: false,
  },
  {
    id: 123,
    title: "Analisis de datos y automatizacion",
    path: "#",
    newTab: false,
  },
];
export default menuData;

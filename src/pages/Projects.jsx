import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Icon } from "../components/atoms";
import { ProjectCard } from "../components/molecules";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(9);

  const categories = [
    { id: "all", name: "Todos", icon: "grid-3x3" },
    { id: "integral", name: "Reformas Integrales", icon: "home" },
    { id: "kitchen", name: "Cocinas", icon: "chef-hat" },
    { id: "bathroom", name: "Baños", icon: "droplets" },
    { id: "commercial", name: "Comercial", icon: "building" },
  ];

  const projects = [
    {
      id: 1,
      title: "Reforma Integral Piso Moderno",
      category: "integral",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e5e7eb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad1)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.8' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3EReforma Integral%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3EPiso Moderno%3C/text%3E%3Crect x='100' y='250' width='80' height='60' fill='%23ddd6fe' rx='5'/%3E%3Crect x='200' y='250' width='80' height='60' fill='%23fde68a' rx='5'/%3E%3Crect x='300' y='250' width='80' height='60' fill='%23bfdbfe' rx='5'/%3E%3Crect x='400' y='250' width='80' height='60' fill='%23fed7d7' rx='5'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad2)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3EEstado Original%3C/text%3E%3C/svg%3E",
      description:
        "Transformación completa de un piso de 120m² con diseño contemporáneo, espacios abiertos y materiales de alta calidad.",
      duration: "3 meses",
      location: "Madrid Centro",
      year: "2024",
      area: "120m²",
      budget: "85.000€",
    },
    {
      id: 2,
      title: "Cocina Americana Premium",
      category: "kitchen",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fef3c7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fde68a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad3)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3ECocina Americana%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3EPremium%3C/text%3E%3Crect x='150' y='230' width='100' height='80' fill='%23f59e0b' opacity='0.7' rx='8'/%3E%3Crect x='270' y='230' width='60' height='80' fill='%23d97706' opacity='0.7' rx='8'/%3E%3Crect x='350' y='230' width='100' height='80' fill='%23b45309' opacity='0.7' rx='8'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad4)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3ECocina Original%3C/text%3E%3C/svg%3E",
      description:
        "Cocina abierta al salón con isla central, electrodomésticos de última generación y acabados en mármol Carrara.",
      duration: "6 semanas",
      location: "Barcelona",
      year: "2024",
      area: "35m²",
      budget: "28.000€",
    },
    {
      id: 3,
      title: "Baño Principal de Lujo",
      category: "bathroom",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dbeafe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23bfdbfe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad5)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3EBaño Principal%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3Ede Lujo%3C/text%3E%3Ccircle cx='200' cy='260' r='25' fill='%230ea5e9' opacity='0.7'/%3E%3Crect x='280' y='235' width='80' height='50' fill='%230284c7' opacity='0.7' rx='8'/%3E%3Ccircle cx='420' cy='260' r='25' fill='%230369a1' opacity='0.7'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad6)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3EBaño Original%3C/text%3E%3C/svg%3E",
      description:
        "Baño principal con ducha de lluvia, bañera exenta y revestimientos en piedra natural con iluminación LED.",
      duration: "4 semanas",
      location: "Valencia",
      year: "2024",
      area: "18m²",
      budget: "15.000€",
    },
    {
      id: 4,
      title: "Oficina Corporativa Moderna",
      category: "commercial",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f0f9ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e0f2fe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad7)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3EOficina Corporativa%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3EModerna%3C/text%3E%3Crect x='120' y='230' width='60' height='80' fill='%230ea5e9' opacity='0.6' rx='5'/%3E%3Crect x='200' y='230' width='60' height='80' fill='%230284c7' opacity='0.6' rx='5'/%3E%3Crect x='280' y='230' width='60' height='80' fill='%230369a1' opacity='0.6' rx='5'/%3E%3Crect x='360' y='230' width='60' height='80' fill='%23075985' opacity='0.6' rx='5'/%3E%3Crect x='440' y='230' width='60' height='80' fill='%230c4a6e' opacity='0.6' rx='5'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad8)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3EOficina Original%3C/text%3E%3C/svg%3E",
      description:
        "Reforma completa de oficina con espacios colaborativos, salas de reuniones acristaladas y tecnología integrada.",
      duration: "8 semanas",
      location: "Madrid",
      year: "2023",
      area: "200m²",
      budget: "120.000€",
    },
    {
      id: 5,
      title: "Loft Industrial Convertido",
      category: "integral",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d1d5db;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad9)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.8' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3ELoft Industrial%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3EConvertido%3C/text%3E%3Crect x='100' y='240' width='120' height='20' fill='%236b7280' opacity='0.8' rx='2'/%3E%3Crect x='240' y='240' width='120' height='20' fill='%234b5563' opacity='0.8' rx='2'/%3E%3Crect x='380' y='240' width='120' height='20' fill='%23374151' opacity='0.8' rx='2'/%3E%3Crect x='150' y='280' width='80' height='40' fill='%239ca3af' opacity='0.6' rx='5'/%3E%3Crect x='260' y='280' width='80' height='40' fill='%236b7280' opacity='0.6' rx='5'/%3E%3Crect x='370' y='280' width='80' height='40' fill='%23374151' opacity='0.6' rx='5'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad10)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3ENave Industrial%3C/text%3E%3C/svg%3E",
      description:
        "Conversión de nave industrial en loft residencial manteniendo elementos originales como vigas de acero.",
      duration: "5 meses",
      location: "Bilbao",
      year: "2023",
      area: "180m²",
      budget: "95.000€",
    },
    {
      id: 6,
      title: "Cocina Rústica Renovada",
      category: "kitchen",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad11' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fef3c7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad11)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3ECocina Rústica%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3ERenovada%3C/text%3E%3Crect x='120' y='240' width='100' height='20' fill='%23d97706' opacity='0.8' rx='10'/%3E%3Crect x='240' y='240' width='100' height='20' fill='%23b45309' opacity='0.8' rx='10'/%3E%3Crect x='360' y='240' width='100' height='20' fill='%2392400e' opacity='0.8' rx='10'/%3E%3Crect x='150' y='280' width='80' height='40' fill='%23f59e0b' opacity='0.7' rx='8'/%3E%3Crect x='260' y='280' width='80' height='40' fill='%23d97706' opacity='0.7' rx='8'/%3E%3Crect x='370' y='280' width='80' height='40' fill='%23b45309' opacity='0.7' rx='8'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad12' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad12)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3ECocina Antigua%3C/text%3E%3C/svg%3E",
      description:
        "Renovación de cocina rústica con elementos modernos, manteniendo el encanto tradicional con vigas de madera.",
      duration: "5 semanas",
      location: "Sevilla",
      year: "2023",
      area: "25m²",
      budget: "18.000€",
    },
    {
      id: 7,
      title: "Baño Minimalista",
      category: "bathroom",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad13' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f8fafc;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e2e8f0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad13)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.95' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3EBaño Minimalista%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3ELíneas Limpias%3C/text%3E%3Crect x='150' y='240' width='100' height='60' fill='%23f1f5f9' stroke='%23cbd5e1' stroke-width='2' rx='8'/%3E%3Crect x='270' y='240' width='60' height='60' fill='%23e2e8f0' stroke='%23cbd5e1' stroke-width='2' rx='8'/%3E%3Crect x='350' y='240' width='100' height='60' fill='%23f8fafc' stroke='%23cbd5e1' stroke-width='2' rx='8'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad14' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad14)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3EBaño Tradicional%3C/text%3E%3C/svg%3E",
      description:
        "Diseño minimalista con líneas limpias, sanitarios suspendidos y revestimientos en microcemento.",
      duration: "3 semanas",
      location: "Zaragoza",
      year: "2023",
      area: "12m²",
      budget: "9.500€",
    },
    {
      id: 8,
      title: "Restaurante Contemporáneo",
      category: "commercial",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad15' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fef3c7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad15)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3ERestaurante%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3EContemporáneo%3C/text%3E%3Ccircle cx='180' cy='260' r='20' fill='%23f59e0b' opacity='0.8'/%3E%3Ccircle cx='240' cy='260' r='20' fill='%23d97706' opacity='0.8'/%3E%3Ccircle cx='300' cy='260' r='20' fill='%23b45309' opacity='0.8'/%3E%3Ccircle cx='360' cy='260' r='20' fill='%2392400e' opacity='0.8'/%3E%3Ccircle cx='420' cy='260' r='20' fill='%23f59e0b' opacity='0.8'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad16' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad16)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3ELocal Original%3C/text%3E%3C/svg%3E",
      description:
        "Reforma integral de restaurante con cocina abierta, barra de degustación y ambiente acogedor.",
      duration: "10 semanas",
      location: "San Sebastián",
      year: "2023",
      area: "150m²",
      budget: "80.000€",
    },
    {
      id: 9,
      title: "Ático con Terraza",
      category: "integral",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad17' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dbeafe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad17)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='white' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='170' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23374151'%3EÁtico con Terraza%3C/text%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%236b7280'%3EVistas Panorámicas%3C/text%3E%3Crect x='120' y='240' width='80' height='60' fill='%230ea5e9' opacity='0.7' rx='8'/%3E%3Crect x='220' y='240' width='80' height='60' fill='%230284c7' opacity='0.7' rx='8'/%3E%3Crect x='320' y='240' width='80' height='60' fill='%230369a1' opacity='0.7' rx='8'/%3E%3Crect x='420' y='240' width='80' height='60' fill='%23075985' opacity='0.7' rx='8'/%3E%3C/svg%3E",
      beforeImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad18' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad18)'/%3E%3Crect x='50' y='50' width='500' height='300' fill='%23f3f4f6' opacity='0.9' rx='10'/%3E%3Ctext x='300' y='180' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='%236b7280'%3EANTES%3C/text%3E%3Ctext x='300' y='210' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%239ca3af'%3EÁtico Original%3C/text%3E%3C/svg%3E",
      description:
        "Reforma de ático con integración de terraza, grandes ventanales y espacios diáfanos con vistas panorámicas.",
      duration: "4 meses",
      location: "Málaga",
      year: "2023",
      area: "90m²",
      budget: "70.000€",
    },
    {
      id: 10,
      title: "Cocina Escandinava",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
      description:
        "Diseño nórdico con muebles blancos, encimera de madera y electrodomésticos integrados.",
      duration: "4 semanas",
      location: "Santander",
      year: "2022",
      area: "20m²",
      budget: "16.000€",
    },
    {
      id: 11,
      title: "Baño Vintage Renovado",
      category: "bathroom",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      description:
        "Renovación respetando elementos vintage con azulejos metro, grifería dorada y bañera con patas.",
      duration: "3 semanas",
      location: "Granada",
      year: "2022",
      area: "15m²",
      budget: "12.000€",
    },
    {
      id: 12,
      title: "Clínica Dental Moderna",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      description:
        "Diseño funcional para clínica dental con salas de tratamiento, recepción moderna y tecnología integrada.",
      duration: "6 semanas",
      location: "Murcia",
      year: "2022",
      area: "100m²",
      budget: "60.000€",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  const stats = [
    { number: "500+", label: "Proyectos Completados", icon: "check-circle" },
    { number: "15+", label: "Años de Experiencia", icon: "calendar" },
    { number: "98%", label: "Clientes Satisfechos", icon: "heart" },
    { number: "50+", label: "Profesionales", icon: "users" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Descubre algunos de nuestros trabajos más destacados y déjate
              inspirar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size="lg" color="text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galería de Proyectos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explora nuestros trabajos organizados por categorías
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleProjects(9);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                <Icon name={category.icon} size="sm" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  beforeImage={project.beforeImage}
                  description={project.description}
                  duration={project.duration}
                  location={project.location}
                  details={{
                    year: project.year,
                    area: project.area,
                    budget: project.budget,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <Button
                onClick={loadMoreProjects}
                variant="outline"
                size="lg"
                className="inline-flex items-center"
              >
                <Icon name="plus" size="sm" className="mr-2" />
                Ver más proyectos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cada proyecto es único
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptamos nuestro enfoque a las necesidades específicas de cada
              cliente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="lightbulb" size="lg" color="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Diseño Personalizado
              </h3>
              <p className="text-gray-600">
                Cada proyecto comienza con un diseño único adaptado a tus
                gustos, necesidades y presupuesto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="hammer" size="lg" color="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ejecución Profesional
              </h3>
              <p className="text-gray-600">
                Nuestro equipo de profesionales certificados garantiza la máxima
                calidad en cada detalle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="shield-check" size="lg" color="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Garantía Total
              </h3>
              <p className="text-gray-600">
                Todos nuestros trabajos incluyen garantía completa y servicio
                post-venta para tu tranquilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Te inspiró algún proyecto?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos tu idea y crearemos algo único para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                className="inline-flex items-center"
              >
                <Icon name="phone" size="sm" className="mr-2" />
                Contactar ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center border-white text-white hover:bg-white hover:text-primary-900"
              >
                <Icon name="image" size="sm" className="mr-2" />
                Ver más proyectos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

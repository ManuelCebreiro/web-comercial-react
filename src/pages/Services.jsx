import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Icon } from "../components/atoms";
import { ContactForm } from "../components/molecules";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos los servicios", icon: "grid-3x3" },
    { id: "integral", name: "Reformas Integrales", icon: "home" },
    { id: "kitchen", name: "Cocinas", icon: "chef-hat" },
    { id: "bathroom", name: "Baños", icon: "droplets" },
    { id: "flooring", name: "Suelos", icon: "square" },
    { id: "painting", name: "Pintura", icon: "palette" },
  ];

  const detailedServices = [
    {
      id: 1,
      title: "Reforma Integral",
      description:
        "Transformación completa de tu hogar con diseño personalizado y materiales de primera calidad.",
      icon: "home",
      category: "integral",
      features: [
        "Diseño arquitectónico personalizado",
        "Gestión completa del proyecto",
        "Materiales premium incluidos",
        "Garantía de 5 años",
      ],
      price: "Desde 800€/m²",
      duration: "2-4 meses",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Reforma de Cocina",
      description:
        "Cocinas modernas y funcionales adaptadas a tu estilo de vida y necesidades culinarias.",
      icon: "chef-hat",
      category: "kitchen",
      features: [
        "Diseño 3D personalizado",
        "Electrodomésticos incluidos",
        "Instalación completa",
        "Garantía de 3 años",
      ],
      price: "Desde 12.000€",
      duration: "3-6 semanas",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Reforma de Baño",
      description:
        "Baños elegantes y funcionales con las últimas tendencias en diseño y tecnología.",
      icon: "droplets",
      category: "bathroom",
      features: [
        "Sanitarios de alta gama",
        "Grifería termostática",
        "Mamparas a medida",
        "Garantía de 3 años",
      ],
      price: "Desde 8.000€",
      duration: "2-4 semanas",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Instalación de Suelos",
      description:
        "Suelos de parquet, laminado, cerámico y vinílico con instalación profesional.",
      icon: "square",
      category: "flooring",
      features: [
        "Amplia variedad de materiales",
        "Instalación profesional",
        "Preparación del suelo incluida",
        "Garantía de 2 años",
      ],
      price: "Desde 25€/m²",
      duration: "1-2 semanas",
      image:
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Pintura y Decoración",
      description:
        "Servicios de pintura interior y exterior con acabados profesionales y duraderos.",
      icon: "palette",
      category: "painting",
      features: [
        "Pinturas ecológicas",
        "Asesoramiento en colores",
        "Preparación de superficies",
        "Garantía de 2 años",
      ],
      price: "Desde 8€/m²",
      duration: "1-2 semanas",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Reformas Parciales",
      description:
        "Reformas específicas adaptadas a tus necesidades y presupuesto.",
      icon: "wrench",
      category: "integral",
      features: [
        "Presupuesto personalizado",
        "Flexibilidad en el proyecto",
        "Materiales a elegir",
        "Garantía incluida",
      ],
      price: "Desde 200€/m²",
      duration: "1-3 semanas",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? detailedServices
      : detailedServices.filter(
          (service) => service.category === selectedCategory
        );

  const processSteps = [
    {
      step: 1,
      title: "Consulta Inicial",
      description:
        "Visitamos tu hogar para evaluar el proyecto y entender tus necesidades.",
      icon: "home",
    },
    {
      step: 2,
      title: "Diseño y Presupuesto",
      description:
        "Creamos un diseño personalizado y un presupuesto detallado sin compromiso.",
      icon: "clipboard-list",
    },
    {
      step: 3,
      title: "Planificación",
      description:
        "Organizamos los tiempos, materiales y permisos necesarios para el proyecto.",
      icon: "calendar",
    },
    {
      step: 4,
      title: "Ejecución",
      description:
        "Nuestro equipo de profesionales ejecuta la reforma con la máxima calidad.",
      icon: "hammer",
    },
    {
      step: 5,
      title: "Entrega Final",
      description:
        "Revisamos cada detalle contigo y te entregamos tu nuevo espacio.",
      icon: "check-circle",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Ofrecemos una amplia gama de servicios de reforma para transformar
              tu hogar
            </p>
            <Button
              variant="white"
              size="lg"
              className="inline-flex items-center"
            >
              <Icon name="phone" size="sm" className="mr-2" />
              Solicitar presupuesto gratuito
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explora nuestros servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Filtra por categoría para encontrar exactamente lo que necesitas
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon name={category.icon} size="sm" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon
                        name={service.icon}
                        size="md"
                        color="text-primary-600"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          color="text-green-500"
                          className="mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {service.price}
                    </span>
                    <Button size="sm">Más información</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro proceso de trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso transparente y profesional para garantizar los mejores
              resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 z-0" />
                )}

                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size="lg" color="white" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {step.step}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Cuéntanos tu idea y te ayudaremos a hacerla realidad con un
                presupuesto personalizado y sin compromiso.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="check-circle"
                    size="md"
                    color="text-green-500"
                    className="mr-3"
                  />
                  <span className="text-gray-700">
                    Presupuesto gratuito en 24h
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="check-circle"
                    size="md"
                    color="text-green-500"
                    className="mr-3"
                  />
                  <span className="text-gray-700">
                    Visita técnica sin coste
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="check-circle"
                    size="md"
                    color="text-green-500"
                    className="mr-3"
                  />
                  <span className="text-gray-700">
                    Asesoramiento personalizado
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Hero, ServicesGrid, ProjectsGallery } from '../components/organisms';
import { TestimonialCard } from '../components/molecules';
import { Button, Icon } from '../components/atoms';

const Home = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Madrid",
      rating: 5,
      comment: "Excelente trabajo en la reforma de mi cocina. Muy profesionales y cumplieron con los plazos establecidos. El resultado superó mis expectativas.",
      avatar: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=3b82f6&color=fff&size=150",
      project: "Reforma de cocina",
      date: "Hace 2 semanas"
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      location: "Barcelona",
      rating: 5,
      comment: "Reformaron completamente mi baño y quedó espectacular. Muy atentos a los detalles y con materiales de primera calidad.",
      avatar: "https://ui-avatars.com/api/?name=Carlos+Ruiz&background=10b981&color=fff&size=150",
      project: "Reforma de baño",
      date: "Hace 1 mes"
    },
    {
      id: 3,
      name: "Ana Martín",
      location: "Valencia",
      rating: 5,
      comment: "Hicieron una reforma integral de mi piso y el resultado es increíble. Muy recomendables por su profesionalidad y trato cercano.",
      avatar: "https://ui-avatars.com/api/?name=Ana+Martinez&background=f59e0b&color=fff&size=150",
      project: "Reforma integral",
      date: "Hace 3 semanas"
    }
  ];

  const features = [
    {
      icon: "award",
      title: "15+ Años de Experiencia",
      description: "Más de una década perfeccionando nuestro oficio"
    },
    {
      icon: "users",
      title: "500+ Clientes Satisfechos",
      description: "Testimonios reales de trabajos exitosos"
    },
    {
      icon: "shield-check",
      title: "Garantía Total",
      description: "Respaldamos todos nuestros trabajos"
    },
    {
      icon: "clock",
      title: "Puntualidad Garantizada",
      description: "Cumplimos con los plazos acordados"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Transformamos tu hogar con reformas de calidad"
        subtitle="Especialistas en reformas integrales, cocinas, baños y más. Más de 15 años creando espacios únicos con la máxima calidad y profesionalidad."
        backgroundImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Crect x='200' y='150' width='300' height='200' rx='10'/%3E%3Crect x='600' y='200' width='250' height='180' rx='10'/%3E%3Crect x='1000' y='180' width='280' height='220' rx='10'/%3E%3Crect x='1400' y='160' width='320' height='240' rx='10'/%3E%3Crect x='150' y='450' width='400' height='300' rx='15'/%3E%3Crect x='650' y='480' width='350' height='280' rx='15'/%3E%3Crect x='1100' y='460' width='380' height='320' rx='15'/%3E%3Crect x='1550' y='440' width='300' height='340' rx='15'/%3E%3C/g%3E%3Ctext x='960' y='540' text-anchor='middle' fill='white' fill-opacity='0.8' font-family='Arial, sans-serif' font-size='48' font-weight='bold'%3EReformas de Calidad%3C/text%3E%3C/svg%3E"
        features={[
          "Presupuesto gratuito y sin compromiso",
          "Materiales de primera calidad",
          "Garantía en todos nuestros trabajos",
          "Equipo de profesionales certificados"
        ]}
      />

      {/* Features Section */}
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
              ¿Por qué elegir Reformas Expertas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos tu mejor opción para transformar tu hogar con la máxima calidad y confianza
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size="lg" color="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* Projects Section */}
      <ProjectsGallery />

      {/* Testimonials Section */}
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
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu hogar?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Solicita tu presupuesto gratuito y sin compromiso. Te asesoramos en todo el proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                className="inline-flex items-center"
                onClick={() => (window.location.href = "tel:+34123456789")}
              >
                <Icon name="phone" size="sm" className="mr-2" />
                Llamar ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center border-white text-white hover:bg-white hover:text-primary-900"
                onClick={() => navigate("/contacto")}
              >
                <Icon name="calculator" size="sm" className="mr-2" />
                Solicitar presupuesto
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
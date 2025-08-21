import React from 'react';
import { ServiceCard } from '../molecules';

const ServicesGrid = ({ 
  title = "Nuestros Servicios",
  subtitle = "Ofrecemos una amplia gama de servicios de reforma para transformar tu hogar",
  onContactClick,
  className = ""
}) => {
  const services = [
    {
      id: 1,
      title: "Reformas Integrales",
      description: "Transformación completa de tu hogar con diseño personalizado y materiales de primera calidad.",
      icon: "hammer",
      features: [
        "Diseño personalizado",
        "Gestión integral del proyecto",
        "Materiales de calidad",
        "Garantía de 5 años"
      ],
      price: "€15.000"
    },
    {
      id: 2,
      title: "Cocinas",
      description: "Diseño y reforma de cocinas modernas y funcionales adaptadas a tus necesidades.",
      icon: "kitchen",
      features: [
        "Diseño 3D gratuito",
        "Electrodomésticos incluidos",
        "Instalación completa",
        "Garantía de 3 años"
      ],
      price: "€8.000"
    },
    {
      id: 3,
      title: "Baños",
      description: "Reforma completa de baños con los mejores materiales y acabados de lujo.",
      icon: "bath",
      features: [
        "Sanitarios de marca",
        "Grifería premium",
        "Azulejos de diseño",
        "Garantía de 3 años"
      ],
      price: "€5.000"
    },
    {
      id: 4,
      title: "Pintura",
      description: "Servicios de pintura interior y exterior con pinturas ecológicas de alta calidad.",
      icon: "paintBucket",
      features: [
        "Pinturas ecológicas",
        "Preparación de superficies",
        "Acabados profesionales",
        "Garantía de 2 años"
      ],
      price: "€1.500"
    },
    {
      id: 5,
      title: "Electricidad",
      description: "Instalaciones eléctricas seguras y eficientes con certificación oficial.",
      icon: "electrical",
      features: [
        "Certificación oficial",
        "Materiales homologados",
        "Instalación segura",
        "Garantía de 5 años"
      ],
      price: "€2.000"
    },
    {
      id: 6,
      title: "Fontanería",
      description: "Servicios completos de fontanería, desde reparaciones hasta instalaciones nuevas.",
      icon: "wrench",
      features: [
        "Reparaciones urgentes",
        "Instalaciones nuevas",
        "Materiales de calidad",
        "Garantía de 3 años"
      ],
      price: "€1.200"
    }
  ];



  return (
    <section className={`section-padding bg-gray-50 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                price={service.price}
                onContactClick={onContactClick || (() => window.location.href = '/contacto')}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Ofrecemos servicios personalizados para cualquier tipo de reforma. 
              Contacta con nosotros y te haremos un presupuesto a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onContactClick || (() => window.location.href = '/contacto')}
                className="btn-primary mr-4"
              >
                Solicitar Presupuesto Personalizado
              </button>
              <button
                onClick={() => window.location.href = 'tel:+34123456789'}
                className="btn-outline"
              >
                Llamar Ahora: +34 123 456 789
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
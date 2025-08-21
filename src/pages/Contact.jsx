import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Icon } from "../components/atoms";
import { ContactForm } from "../components/molecules";

const Contact = () => {
  const contactInfo = [
    {
      icon: "phone",
      title: "Teléfono",
      details: ["+34 123 456 789", "+34 987 654 321"],
      description: "Llámanos de Lunes a Viernes de 8:00 a 18:00h",
    },
    {
      icon: "mail",
      title: "Email",
      details: [
        "info@reformasexpertas.com",
        "presupuestos@reformasexpertas.com",
      ],
      description: "Respuesta garantizada en menos de 24 horas",
    },
    {
      icon: "map-pin",
      title: "Oficina Principal",
      details: ["Calle Reforma, 123", "28001 Madrid, España"],
      description: "Visítanos de Lunes a Viernes de 9:00 a 17:00h",
    },
    {
      icon: "clock",
      title: "Horario",
      details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 9:00 - 14:00"],
      description: "Emergencias 24/7 disponibles",
    },
  ];

  const offices = [
    {
      city: "Madrid",
      address: "Calle Reforma, 123",
      postal: "28001 Madrid",
      phone: "+34 123 456 789",
      email: "madrid@reformasexpertas.com",
      manager: "Carlos González",
    },
    {
      city: "Barcelona",
      address: "Avda. Diagonal, 456",
      postal: "08008 Barcelona",
      phone: "+34 234 567 890",
      email: "barcelona@reformasexpertas.com",
      manager: "Ana Martín",
    },
    {
      city: "Valencia",
      address: "Calle Colón, 789",
      postal: "46004 Valencia",
      phone: "+34 345 678 901",
      email: "valencia@reformasexpertas.com",
      manager: "Miguel Ruiz",
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda en realizarse un presupuesto?",
      answer:
        "Realizamos presupuestos gratuitos en un plazo máximo de 24-48 horas. Para proyectos complejos, podemos necesitar una visita técnica que programamos en 2-3 días.",
    },
    {
      question: "¿Qué garantía ofrecen en sus trabajos?",
      answer:
        "Ofrecemos garantía de 2 años en mano de obra y hasta 5 años en materiales según el fabricante. Además, realizamos revisiones gratuitas al año de finalizar la obra.",
    },
    {
      question: "¿Se encargan de los permisos y licencias?",
      answer:
        "Sí, nos encargamos de toda la gestión de permisos, licencias y trámites administrativos necesarios para su proyecto. Esto está incluido en nuestro servicio.",
    },
    {
      question: "¿Trabajan con financiación?",
      answer:
        "Sí, trabajamos con diferentes entidades financieras para ofrecer opciones de financiación adaptadas a cada proyecto. Consulte condiciones sin compromiso.",
    },
    {
      question: "¿Qué pasa si hay imprevistos durante la obra?",
      answer:
        "Cualquier modificación o imprevisto se comunica inmediatamente al cliente con presupuesto detallado. No realizamos trabajos adicionales sin autorización previa.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
              Contacta con Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Estamos aquí para ayudarte a hacer realidad tu proyecto de reforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                className="inline-flex items-center"
              >
                <Icon name="phone" size="sm" className="mr-2" />
                Llamar ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center border-white text-white hover:bg-white hover:text-primary-900"
              >
                <Icon name="calendar" size="sm" className="mr-2" />
                Agendar cita
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={info.icon} size="lg" color="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-primary-600 font-medium mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-600 text-sm mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Solicita tu presupuesto
                </h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y te contactaremos en menos de 24 horas
                  con un presupuesto personalizado.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Map and Offices */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="map-pin"
                      size="xl"
                      color="text-gray-400"
                      className="mx-auto mb-2"
                    />
                    <p className="text-gray-500">Mapa interactivo</p>
                    <p className="text-sm text-gray-400">
                      Encuentra nuestras oficinas
                    </p>
                  </div>
                </div>
              </div>

              {/* Offices List */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Nuestras Oficinas
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {office.city}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center">
                          <Icon name="map-pin" size="sm" className="mr-2" />
                          {office.address}, {office.postal}
                        </p>
                        <p className="flex items-center">
                          <Icon name="phone" size="sm" className="mr-2" />
                          {office.phone}
                        </p>
                        <p className="flex items-center">
                          <Icon name="mail" size="sm" className="mr-2" />
                          {office.email}
                        </p>
                        <p className="flex items-center">
                          <Icon name="user" size="sm" className="mr-2" />
                          Responsable: {office.manager}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name={openFaq === index ? "chevron-up" : "chevron-down"}
                    size="md"
                    color="text-gray-500"
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-red-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="phone-call" size="lg" color="text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes una emergencia?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Para urgencias fuera del horario comercial, contamos con un
              servicio de emergencias 24/7 para problemas críticos como fugas,
              averías eléctricas o situaciones que requieran atención inmediata.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center bg-red-600 hover:bg-red-700"
            >
              <Icon name="phone" size="sm" className="mr-2" />
              Llamar Emergencias: +34 900 123 456
            </Button>
          </motion.div>
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
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              No esperes más. Contacta con nosotros hoy mismo y comienza a
              transformar tu hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                className="inline-flex items-center"
              >
                <Icon name="calculator" size="sm" className="mr-2" />
                Solicitar presupuesto
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center border-white text-white hover:bg-white hover:text-primary-900"
              >
                <Icon name="calendar" size="sm" className="mr-2" />
                Agendar visita
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

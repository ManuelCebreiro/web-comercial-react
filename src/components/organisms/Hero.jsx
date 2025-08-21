import { motion } from "framer-motion";
import { Button, Icon } from "../atoms";

const Hero = ({
  title = "Transformamos tu hogar con reformas de calidad",
  subtitle = "Especialistas en reformas integrales con más de 15 años de experiencia. Calidad, profesionalidad y garantía en cada proyecto.",
  backgroundImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='heroBg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23134e4a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23065f46;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23heroBg)'/%3E%3Cg fill='white' fill-opacity='0.08'%3E%3Crect x='100' y='100' width='200' height='150' rx='8'/%3E%3Crect x='400' y='120' width='180' height='130' rx='8'/%3E%3Crect x='700' y='110' width='220' height='160' rx='8'/%3E%3Crect x='1000' y='100' width='250' height='170' rx='8'/%3E%3Crect x='1350' y='120' width='200' height='140' rx='8'/%3E%3Crect x='50' y='350' width='300' height='200' rx='12'/%3E%3Crect x='450' y='380' width='280' height='180' rx='12'/%3E%3Crect x='800' y='360' width='320' height='220' rx='12'/%3E%3Crect x='1200' y='370' width='290' height='190' rx='12'/%3E%3Crect x='1550' y='350' width='250' height='210' rx='12'/%3E%3Crect x='150' y='650' width='400' height='250' rx='15'/%3E%3Crect x='650' y='680' width='350' height='230' rx='15'/%3E%3Crect x='1100' y='660' width='380' height='270' rx='15'/%3E%3C/g%3E%3Ctext x='960' y='540' text-anchor='middle' fill='white' fill-opacity='0.6' font-family='Arial, sans-serif' font-size='36' font-weight='300'%3EEspecialistas en Reformas%3C/text%3E%3C/svg%3E",
  onContactClick,
  onServicesClick,
  className = "",
}) => {
  const features = [
    { icon: "shield", text: "Garantía de calidad" },
    { icon: "clock", text: "Entrega puntual" },
    { icon: "award", text: "+15 años experiencia" },
    { icon: "users", text: "Equipo profesional" },
  ];

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Reforma de hogar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-gold-300 text-sm font-medium mb-6 mt-16 md:mt-0"
            >
              <Icon name="award" size="sm" className="mr-2" />
              Empresa líder en reformas
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center text-white/90 text-sm"
                >
                  <div className="w-8 h-8 bg-primary-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                    <Icon name={feature.icon} size="sm" color="white" />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={
                  onContactClick ||
                  (() => (window.location.href = "tel:+34123456789"))
                }
                className="shadow-2xl"
              >
                <Icon name="phone" size="md" className="mr-2" />
                Presupuesto Gratuito
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={
                  onServicesClick ||
                  (() => (window.location.href = "/servicios"))
                }
                className="border-2 border-white text-white hover:bg-white hover:text-black shadow-2xl"
              >
                <Icon name="wrench" size="md" className="mr-2" />
                Ver Servicios
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-white/70 text-xs mt-2 text-center">Scroll</p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gold-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo, Icon, Button } from '../atoms';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const services = [
    'Reformas Integrales',
    'Cocinas',
    'Baños',
    'Pintura',
    'Fontanería',
    'Electricidad'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' }
  ];

  const contactInfo = [
    {
      icon: 'phone',
      label: 'Teléfono',
      value: '+34 123 456 789',
      link: 'tel:+34123456789'
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'info@reformasexpertas.com',
      link: 'mailto:info@reformasexpertas.com'
    },
    {
      icon: 'mapPin',
      label: 'Dirección',
      value: 'Calle Principal 123, Madrid',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo size="lg" variant="white" className="mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas en reformas integrales con más de 15 años de experiencia. 
              Transformamos espacios con calidad, profesionalidad y garantía.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size="md" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group cursor-pointer">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  whileHover={{ x: 5 }}
                  className="flex items-start text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <Icon 
                    name={info.icon} 
                    size="md" 
                    className="mr-3 mt-1 text-primary-600 group-hover:text-primary-400" 
                  />
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-6">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => window.location.href = '/contacto'}
                className="w-full"
              >
                Solicitar Presupuesto
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Reformas Expertas. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Icon } from '../atoms';

const ContactForm = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Reforma integral',
    'Cocinas',
    'Baños',
    'Pintura',
    'Fontanería',
    'Electricidad',
    'Carpintería',
    'Otro'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`card text-center ${className}`}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="check" size="xl" color="success" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          ¡Mensaje enviado con éxito!
        </h3>
        <p className="text-gray-600 mb-6">
          Nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className={`card ${className}`}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Solicita tu presupuesto gratuito
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Nombre completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="Tu nombre completo"
        />
        
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="tu@email.com"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Teléfono"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="123 456 789"
        />
        
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Servicio de interés
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Selecciona un servicio</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
            errors.message 
              ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-400' 
              : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 hover:border-gray-400'
          }`}
          placeholder="Cuéntanos sobre tu proyecto..."
          required
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        Al enviar este formulario, aceptas que nos pongamos en contacto contigo.
      </p>
    </motion.form>
  );
};

export default ContactForm;
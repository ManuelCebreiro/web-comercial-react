import React from 'react';
import { motion } from 'framer-motion';
import { Button, Icon } from '../atoms';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features = [], 
  price, 
  onContactClick,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`card group cursor-pointer ${className}`}
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors duration-300">
          <Icon name={icon} size="xl" color="primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      {features.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Icon name="check" size="sm" color="success" className="mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {price && (
        <div className="mb-6 text-center">
          <span className="text-2xl font-bold text-primary-600">{price}</span>
          <span className="text-gray-500 text-sm ml-1">desde</span>
        </div>
      )}
      
      <div className="mt-auto">
        <Button 
          variant="outline" 
          size="md" 
          onClick={onContactClick}
          className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
        >
          Solicitar Presupuesto
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
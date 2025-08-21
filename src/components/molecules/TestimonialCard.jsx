import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../atoms';

const TestimonialCard = ({ 
  name, 
  location, 
  rating = 5, 
  comment, 
  avatar, 
  project,
  date,
  className = '' 
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon 
        key={index}
        name="star" 
        size="sm" 
        color={index < rating ? 'warning' : 'gray'}
        className={index < rating ? 'fill-current' : ''}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`card relative ${className}`}
    >
      {/* Quote icon */}
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
        <Icon name="quote" size="sm" color="white" />
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars()}
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      </div>
      
      {/* Comment */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
        "{comment}"
      </blockquote>
      
      {/* Client info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <Icon name="users" size="lg" color="gray" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="text-sm text-gray-600">
            {location && (
              <div className="flex items-center">
                <Icon name="mapPin" size="xs" className="mr-1" />
                {location}
              </div>
            )}
            {project && (
              <div className="text-xs text-gray-500 mt-1">
                Proyecto: {project}
              </div>
            )}
          </div>
        </div>
        {date && (
          <div className="text-xs text-gray-400">
            {date}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
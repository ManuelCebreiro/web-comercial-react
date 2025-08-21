import React, { useState } from 'react';
import { Icon } from '../atoms';

const ProjectCard = ({ 
  title, 
  category, 
  image, 
  description, 
  duration, 
  location,
  beforeImage,
  afterImage,
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showBefore, setShowBefore] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card overflow-hidden group ${className}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={showBefore && beforeImage ? beforeImage : (image || afterImage)} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay con información */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-center text-white p-4">
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm opacity-90 mb-3">{description}</p>
            {beforeImage && afterImage && (
              <button 
                onClick={() => setShowBefore(!showBefore)}
                className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full hover:bg-opacity-30 transition-all"
              >
                {showBefore ? 'Ver Después' : 'Ver Antes'}
              </button>
            )}
          </div>
        </div>
        
        {/* Badge de categoría */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          {location && (
            <div className="flex items-center">
              <Icon name="mapPin" size="xs" className="mr-1" />
              {location}
            </div>
          )}
          {duration && (
            <div className="flex items-center">
              <Icon name="clock" size="xs" className="mr-1" />
              {duration}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
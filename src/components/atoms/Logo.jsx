import React from 'react';
import { Hammer } from 'lucide-react';

const Logo = ({ size = 'md', variant = 'default', className = '' }) => {
  const sizes = {
    sm: {
      icon: 'w-6 h-6',
      text: 'text-lg',
      container: 'gap-2'
    },
    md: {
      icon: 'w-8 h-8',
      text: 'text-xl',
      container: 'gap-3'
    },
    lg: {
      icon: 'w-10 h-10',
      text: 'text-2xl',
      container: 'gap-3'
    },
    xl: {
      icon: 'w-12 h-12',
      text: 'text-3xl',
      container: 'gap-4'
    }
  };

  const variants = {
    default: {
      icon: 'text-primary-600',
      text: 'text-gray-900',
      accent: 'text-gold-500'
    },
    white: {
      icon: 'text-white',
      text: 'text-white',
      accent: 'text-gold-400'
    },
    dark: {
      icon: 'text-primary-600',
      text: 'text-gray-900',
      accent: 'text-gold-500'
    }
  };

  const currentSize = sizes[size];
  const currentVariant = variants[variant];

  return (
    <div className={`flex items-center ${currentSize.container} ${className}`}>
      <div className={`${currentVariant.icon} ${currentSize.icon}`}>
        <Hammer className="w-full h-full" />
      </div>
      <div className={`font-bold ${currentSize.text} ${currentVariant.text}`}>
        Reformas{' '}
        <span className={currentVariant.accent}>Expertas</span>
      </div>
    </div>
  );
};

export default Logo;
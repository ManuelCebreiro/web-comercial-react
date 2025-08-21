import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Wrench, 
  Image, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp,
  Star,
  Quote,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Hammer,
  PaintBucket,
  Bath,
  ChefHat,
  Zap,
  Shield,
  ShieldCheck,
  Clock,
  Award,
  Users,
  CheckCircle,
  Calendar,
  Calculator,
  PhoneCall,
  User,
  Droplets,
  Heart,
  Square,
  Palette,
  ClipboardList
} from 'lucide-react';

const iconMap = {
  home: Home,
  wrench: Wrench,
  image: Image,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  'map-pin': MapPin,
  menu: Menu,
  x: X,
  chevronDown: ChevronDown,
  'chevron-down': ChevronDown,
  chevronUp: ChevronUp,
  'chevron-up': ChevronUp,
  star: Star,
  quote: Quote,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  whatsapp: MessageCircle,
  hammer: Hammer,
  paintBucket: PaintBucket,
  bath: Bath,
  kitchen: ChefHat,
  'chef-hat': ChefHat,
  electrical: Zap,
  shield: Shield,
  'shield-check': ShieldCheck,
  clock: Clock,
  award: Award,
  users: Users,
  check: CheckCircle,
  'check-circle': CheckCircle,
  calendar: Calendar,
  calculator: Calculator,
  'phone-call': PhoneCall,
  user: User,
  droplets: Droplets,
  heart: Heart,
  square: Square,
  palette: Palette,
  'clipboard-list': ClipboardList
};

const Icon = ({ 
  name, 
  size = 'md', 
  color = 'current', 
  className = '',
  animate = false,
  ...props 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  };

  const colors = {
    current: 'text-current',
    primary: 'text-primary-600',
    secondary: 'text-gold-500',
    white: 'text-white',
    gray: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  const iconClasses = `${sizes[size]} ${colors[color]} ${className}`;

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="inline-block"
      >
        <IconComponent className={iconClasses} {...props} />
      </motion.div>
    );
  }

  return <IconComponent className={iconClasses} {...props} />;
};

export default Icon;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../molecules';
import { Button, Icon } from '../atoms';

const ProjectsGallery = ({ 
  title = "Nuestros Proyectos",
  subtitle = "Descubre algunos de nuestros trabajos más destacados",
  showAll = false,
  className = ""
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [visibleProjects, setVisibleProjects] = useState(showAll ? 12 : 6);

  const categories = [
    { id: 'todos', name: 'Todos', count: 24 },
    { id: 'cocinas', name: 'Cocinas', count: 8 },
    { id: 'baños', name: 'Baños', count: 6 },
    { id: 'integrales', name: 'Reformas Integrales', count: 5 },
    { id: 'pintura', name: 'Pintura', count: 5 }
  ];

  const projects = [
    {
      id: 1,
      title: "Reforma Integral Apartamento Madrid",
      category: "integrales",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Transformación completa de un apartamento de 80m² en el centro de Madrid",
      duration: "6 semanas",
      location: "Madrid Centro"
    },
    {
      id: 2,
      title: "Cocina Moderna Minimalista",
      category: "cocinas",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Diseño minimalista con isla central y electrodomésticos integrados",
      duration: "3 semanas",
      location: "Pozuelo de Alarcón"
    },
    {
      id: 3,
      title: "Baño de Lujo con Ducha de Obra",
      category: "baños",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Baño principal con ducha de obra, mármol y grifería de diseño",
      duration: "2 semanas",
      location: "Las Rozas"
    },
    {
      id: 4,
      title: "Salón Comedor Contemporáneo",
      category: "integrales",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Espacio abierto con cocina integrada y zona de estar",
      duration: "4 semanas",
      location: "Majadahonda"
    },
    {
      id: 5,
      title: "Cocina Rústica Moderna",
      category: "cocinas",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Combinación perfecta entre estilo rústico y funcionalidad moderna",
      duration: "3 semanas",
      location: "Alcalá de Henares"
    },
    {
      id: 6,
      title: "Baño Pequeño Optimizado",
      category: "baños",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Maximización del espacio en baño de 4m² con soluciones inteligentes",
      duration: "10 días",
      location: "Madrid Centro"
    },
    {
      id: 7,
      title: "Pintura Exterior Chalet",
      category: "pintura",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Renovación completa de fachada con pintura de alta resistencia",
      duration: "1 semana",
      location: "Boadilla del Monte"
    },
    {
      id: 8,
      title: "Dormitorio Principal Suite",
      category: "integrales",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Dormitorio principal con vestidor y baño en suite",
      duration: "3 semanas",
      location: "Tres Cantos"
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleProjects(6);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-600 hover:text-primary-600'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map(project => (
              <div key={project.id}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  description={project.description}
                  duration={project.duration}
                  location={project.location}
                  className="h-full"
                />
              </div>
            ))}
        </div>

        {/* Load More Button */}
        {!showAll && visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="group"
            >
              Ver más proyectos
              <Icon name="chevronDown" size="md" className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
              Nos encantaría ayudarte a hacer realidad tu proyecto. 
              Contacta con nosotros para una consulta gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                onClick={() => navigate('/contacto')}
              >
                <Icon name="mail" size="md" className="mr-2" />
                Solicitar Consulta Gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:+34123456789'}
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Icon name="phone" size="md" className="mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string;
  live?: string;
  images?: string[];
}

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  
  // Get projects as a properly typed array
  const projects = t('projects.items', { returnObjects: true }) as Project[];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((project) => project.category === filter);
  
  const filters = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'frontend', label: t('projects.filters.frontend') },
    { key: 'backend', label: t('projects.filters.backend') },
    { key: 'fullstack', label: t('projects.filters.fullstack') }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">{t('projects.title')}</h1>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((item) => (
            <Button
              key={item.key}
              variant={filter === item.key ? "default" : "outline"}
              onClick={() => setFilter(item.key)}
              className="rounded-full"
            >
              {item.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${filter}`} // Use unique key combining title and filter
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              images={project.images}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
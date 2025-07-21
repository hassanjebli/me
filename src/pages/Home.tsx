
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 pt-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center md:text-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-primary text-lg md:text-xl font-medium mb-2"
            variants={itemVariants}
          >
            {t('hero.greeting')}
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-3"
            variants={itemVariants}
          >
            {t('hero.name')}
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            variants={itemVariants}
          >
            {t('hero.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/projects">
                {t('hero.cta.projects')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link to="/contact">
                {t('hero.cta.contact')}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

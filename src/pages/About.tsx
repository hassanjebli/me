
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Get skills as proper arrays to use array methods
  const frontendSkills = t('about.skills.languages', { returnObjects: true }) as string[];
  const backendSkills = [...frontendSkills]; // Create a copy to avoid modifying the original

  // Split the skills into frontend and backend (first half and second half)
  const halfIndex = Math.ceil(frontendSkills.length / 2);
  const frontendSkillsHalf = frontendSkills.slice(0, halfIndex);
  const backendSkillsHalf = backendSkills.slice(halfIndex);

  // Get timeline items as proper array
  const timelineItems = t('about.timeline.items', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    organization: string;
    description: string;
  }>;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
            {t('about.shortBio')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{t('about.title')}</h2>
                <p className="text-muted-foreground mb-4">{t('about.longBio')}</p>
                
                <h3 className="text-xl font-semibold mb-3">{t('about.skills.title')}</h3>
                
                <div className="mb-4">
                  <h4 className="text-lg mb-2">{t('about.skills.frontend')}</h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {frontendSkillsHalf.map((skill: string, index: number) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Badge variant="outline" className="px-3 py-1">{skill}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg mb-2">{t('about.skills.backend')}</h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {backendSkillsHalf.map((skill: string, index: number) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Badge variant="outline" className="px-3 py-1">{skill}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{t('about.timeline.title')}</h2>
                
                <div className="space-y-6">
                  {timelineItems.map((item, index: number) => (
                    <motion.div 
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={fadeInUp}
                      className="relative"
                    >
                      {index > 0 && <Separator className="absolute top-0 left-0 right-0" />}
                      <div className="pt-6 first:pt-0">
                        <div className="text-sm text-primary font-medium">{item.year}</div>
                        <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">{item.organization}</div>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

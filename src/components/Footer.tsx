
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-muted/30 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Copyright */}
          <div>
            <Link to="/" className="text-xl font-bold text-foreground inline-block mb-4">
              <span className="text-primary">{'<'}</span>
              Hassan
              <span className="text-primary">{'/>'}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
          </div>
          
          {/* Language and Theme */}
          <div className="flex flex-col items-center md:items-center space-y-4">
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm font-semibold mb-4">{t('contact.info.title')}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/hassanjebli" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hassanjebli/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

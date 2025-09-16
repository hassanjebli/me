import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  images?: string[];
  index: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  live,
  images = [],
  index
}: ProjectCardProps) => {
  const { t } = useTranslation();
  const [showPreview, setShowPreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset state when component props change (when filtering)
  useEffect(() => {
    setShowPreview(false);
    setCurrentImageIndex(0);
    setImageLoaded(false);
  }, [title, images]); // Reset when title or images change

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openPreview = () => {
    setShowPreview(true);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
          {/* Project Image Preview */}
          {images.length > 0 && (
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                key={`${title}-${images[0]}`} // Force re-render when title/image changes
                src={images[0]}
                alt={title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  // Fallback to a placeholder or hide image on error
                  e.currentTarget.style.display = 'none';
                }}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              {!imageLoaded && (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="text-gray-500">Loading...</div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={openPreview}
                  className="bg-white/90 hover:bg-white text-black"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </div>
              {images.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
                  {images.length} photos
                </div>
              )}
            </div>
          )}

          <CardContent className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0 flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {images.length > 0 && (
              <Button variant="default" size="sm" onClick={openPreview}>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white"
                onClick={() => setShowPreview(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Header */}
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-white text-xl font-semibold bg-black/70 px-3 py-1 rounded-md">
                  {title}
                </h3>
              </div>

                              {/* Image Container */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  key={`preview-${title}-${currentImageIndex}`} // Force re-render for preview images
                  src={images[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full max-h-[70vh] object-contain"
                />

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4 max-w-full overflow-x-auto">
                  {images.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                        i === currentImageIndex
                          ? 'border-white shadow-lg'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
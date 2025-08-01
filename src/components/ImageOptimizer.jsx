import React, { useState, useRef, useEffect } from 'react';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "/images/logo.PNG",
  priority = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (priority) {
      // Preload high priority images
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
      };
      img.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
    } else {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [src, priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    setIsLoading(false);
    e.target.style.opacity = '1';
  };

  const handleError = (e) => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc && fallbackSrc !== src) {
      e.target.src = fallbackSrc;
      setHasError(false);
      setIsLoading(true);
    }
  };

  if (hasError && !fallbackSrc) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Skeleton loading */}
      {isLoading && (
        <div className="absolute inset-0 image-skeleton rounded-lg" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={hasError ? fallbackSrc : src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageOptimizer; 
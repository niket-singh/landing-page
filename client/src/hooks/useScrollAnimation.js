import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations with multiple animation types
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {string} options.animationType - Type of animation: 'fade-up', 'fade-left', 'fade-right', 'scale', 'slide-up'
 * @param {number} options.delay - Animation delay in ms
 * @returns {Array} [elementRef, isVisible]
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    animationType = 'fade-up',
    delay = 0,
    once = true // Trigger animation only once by default
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, delay, once, hasAnimated]);

  // Get animation class based on type
  const getAnimationClass = () => {
    const baseClass = animationType;
    return `${baseClass} ${isVisible ? 'visible' : ''}`;
  };

  return [elementRef, isVisible, getAnimationClass()];
};

/**
 * Hook for staggered animations on child elements
 * @param {number} childCount - Number of children to animate
 * @param {number} staggerDelay - Delay between each child animation (ms)
 */
export const useStaggerAnimation = (childCount = 0, staggerDelay = 100) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = containerRef.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [containerRef, isVisible];
};

/**
 * Hook for parallax scroll effect
 * @param {number} speed - Parallax speed multiplier (0.1 - 1.0)
 */
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const elementTop = rect.top + scrolled;
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [elementRef, offset];
};

/**
 * Hook to detect scroll direction
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;

      if (currentOffset > prevOffset) {
        setScrollDirection('down');
      } else if (currentOffset < prevOffset) {
        setScrollDirection('up');
      }

      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevOffset]);

  return scrollDirection;
};

export default useScrollAnimation;

import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal component - triggers a fade/slide-in animation when scrolled into view.
 * Supports staggered delay and respects 'prefers-reduced-motion: reduce'.
 */
export const Reveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  direction = 'up',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const style = {
    transitionDuration: '600ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${typeof delay === 'number' ? delay * 1000 : 0}ms`,
    transitionProperty: 'opacity, transform',
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translate3d(0, 0, 0)'
      : direction === 'up'
      ? 'translate3d(0, 24px, 0)'
      : 'none',
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <div
      ref={domRef}
      className={`w-full ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

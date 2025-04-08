
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize scroll animations
export const initScrollAnimations = () => {
  // Animate elements with .animate-on-scroll class
  gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Animate elements with .fade-in-left class
  gsap.utils.toArray<HTMLElement>('.fade-in-left').forEach((element) => {
    gsap.fromTo(
      element,
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Animate elements with .fade-in-right class
  gsap.utils.toArray<HTMLElement>('.fade-in-right').forEach((element) => {
    gsap.fromTo(
      element,
      {
        x: 50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href');
      if (!href) return;

      const target = document.querySelector(href);
      if (!target) return;

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80, // Account for fixed header
        },
        ease: 'power2.inOut'
      });
    });
  });
};

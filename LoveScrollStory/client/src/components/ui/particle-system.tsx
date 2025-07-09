import { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  particles?: string[];
  count?: number;
  interval?: number;
}

export default function ParticleSystem({ 
  particles = ['💕', '💖', '✨', '🌸', '💫', '🌙', '💝', '🥺'],
  count = 10,
  interval = 2000
}: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      
      // Random position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation
      particle.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    }

    // Create initial particles
    for (let i = 0; i < count; i++) {
      setTimeout(createParticle, i * 200);
    }

    // Create particles periodically
    const intervalId = setInterval(createParticle, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [particles, count, interval]);

  return (
    <div 
      ref={containerRef}
      className="particle-container"
      aria-hidden="true"
    />
  );
}

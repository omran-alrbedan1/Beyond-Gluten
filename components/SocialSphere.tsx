'use client';

import { motion } from 'framer-motion';
import {
  socialSphereVariants,
  socialSphereBounceVariants,
  socialSphereIconVariants,
  socialSphereGlowVariants,
} from '@/constants/variants';

interface SocialSphereProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  delay: number;
  index: number;
}

export default function SocialSphere({ icon, href, label, delay, index }: SocialSphereProps) {
  const sphereDelay = delay + (index * 0.1);
  const bounceDelay = delay + (index * 0.15) + 0.5;
  const iconDelay = delay + (index * 0.1) + 0.2;
  const glowDelay = delay + (index * 0.1);

  return (
    <motion.a
      href={href}
      className="relative flex items-center justify-center cursor-pointer"
      aria-label={label}
      variants={socialSphereVariants(sphereDelay)}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.15,
        y: -8,
        transition: {
          type: "spring" as const,
          stiffness: 400,
          damping: 12,
          duration: 0.3
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Bounce animation wrapper */}
      <motion.div
        variants={socialSphereBounceVariants(bounceDelay)}
        initial="hidden"
        animate="visible"
      >
        {/* Glow effect */}
        <motion.div
          variants={socialSphereGlowVariants(glowDelay)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand) 0%, transparent 70%)`,
            filter: 'blur(8px)',
          }}
        />
        
        {/* 3D Sphere */}
        <div 
          className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          style={{
            background: `radial-gradient(circle at 30% 35%, rgba(139, 148, 103, 0.8), rgba(139, 148, 103, 0.33))`,
            boxShadow: `0 8px 20px rgba(139, 148, 103, 0.25), inset 0 2px 4px rgba(255,255,255,0.3)`,
            backdropFilter: 'blur(2px)',
          }}
        >
          {/* Inner shine */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 35%, rgba(255,255,255,0.4) 0%, transparent 60%)',
            }}
          />
          
          {/* Icon */}
          <motion.div
            variants={socialSphereIconVariants(iconDelay)}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-white"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
          >
            {icon}
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
}
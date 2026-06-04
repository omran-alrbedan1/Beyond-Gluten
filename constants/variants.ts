import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 160,
      damping: 20,
    },
  },
};

export const phoneVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0, rotateY: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 24,
      delay: 0.4,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { x: -50, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 140,
      damping: 18,
      delay: 0.7,
    },
  },
};

export const waffleVariants: Variants = {
  hidden: { x: 50, opacity: 0, rotate: 15, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 130,
      damping: 20,
      delay: 0.8,
    },
  },
};

export const sushiVariants: Variants = {
  hidden: { y: 60, opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: -6,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 22,
      delay: 0.9,
    },
  },
};

export const buttonHoverVariants: Variants = {
  hover: { scale: 1.05, transition: { type: 'spring' as const, stiffness: 400, damping: 15 } },
  tap: { scale: 0.97 },
};

export const scrollIndicatorVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.1, duration: 0.5, ease: 'easeOut' as const },
  },
};

export const pulseVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: [0.98, 1.02, 0.98],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

export const floatVariants: Variants = {
  hidden: { y: 0, rotate: 0 },
  visible: {
    y: [0, -8, 0],
    rotate: [0, 2, -2, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 },
  },
};

// WhyChooseUs section variants
export const whyChooseUsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const whyChooseUsHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const whyChooseUsCardVariants = (isRTL: boolean): Variants => ({
  hidden: { 
    opacity: 0, 
    x: isRTL ? -60 : 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  hover: {
    y: -8,
    transition: { type: 'spring' as const, stiffness: 300 },
  },
});

export const whyChooseUsIconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: { type: 'spring' as const, stiffness: 400 },
  },
};

export const sparkleVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -90 },
  visible: {
    opacity: 0.7,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15, delay: 0.6 },
  },
  float: {
    y: [0, -8, 0],
    rotate: [0, 15, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// Left features list variants (appear first)
export const leftCardListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Right features list variants (appear after left finishes)
export const rightCardListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2 * 3 + 0.3,
    },
  },
};

// Left item variants (appear from left)
export const leftItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const,
    },
  },
};

// Right item variants (appear from right)
export const rightItemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const,
    },
  },
};

// Image variants with spring animation
export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, rotate: -4, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 110,
      damping: 18,
      delay: 0.4,
    },
  },
};

// Circle behind image variants
export const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  },
};

// Feature item hover variants
export const featureHoverVariants: Variants = {
  hover: {
    scale: 1.02,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  },
  tap: {
    scale: 0.98
  }
};

// Pulse animation for the dots
export const dotPulseVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2 }
  },
  pulse: {
    scale: [1, 1.3, 1],
    opacity: [0.7, 0.2, 0.7],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const }
  }
};

export const innovativeShopContentContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const innovativeShopTextItemVariants = (isRTL: boolean): Variants => ({
  hidden: { 
    opacity: 0, 
    x: isRTL ? 120 : -120, 
    y: 15 
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 90,
      damping: 18,
    },
  },
});

export const innovativeShopCinematicPhoneVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 220, 
    scale: 0.75, 
    rotate: -8 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 14,
      duration: 1.1,
    },
  },
};

export const innovativeShopCircleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 50,
      damping: 15,
      delay: 0.2,
    },
  },
};

export const innovativeShopStarVariants = (custom: number): Variants => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 0.4, 1],
    scale: 1,
    transition: {
      delay: 0.6 + custom * 0.2,
      duration: 0.8,
    },
  },
}
)
export const AppDownloadcardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    y: 30 
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.15,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

// AppScreenshots section variants
export const appScreenshotsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const appScreenshotsHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const appScreenshotsTagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export const appScreenshotsTitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

export const appScreenshotsCarouselVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const appScreenshotsDotsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export const appScreenshotsCardVariants = (index: number, isCenter: boolean): Variants => ({
  hidden: { 
    opacity: 0, 
    scale: 0.7,
    rotateY: isCenter ? 0 : 15,
  },
  visible: {
    opacity: isCenter ? 1 : 0.6,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
});

// ClientReviews section variants
export const clientReviewsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const clientReviewsItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  },
};

export const clientReviewsTextVariants = (direction: number): Variants => ({
  enter: {
    x: direction > 0 ? 100 : -100,
    opacity: 0
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  },
  exit: {
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  }
});

export const clientReviewsImageVariants: Variants = {
  initial: { scale: 0.8, opacity: 0, rotate: -10 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: {
      duration: 0.3,
      type: "spring" as const,
      stiffness: 300
    }
  }
};

export const clientReviewsButtonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    backgroundColor: "#8C936E",
    color: "#FFFFFF",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

export const clientReviewsAvatarVariants: Variants = {
  initial: { scale: 0, opacity: 0, rotate: -180 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      duration: 0.5
    }
  },
  whileHover: {
    scale: 1.1,
    rotate: 360,
    transition: { duration: 0.4, type: "spring" as const, stiffness: 300 }
  }
};

export const clientReviewsDotsVariants = (custom: number): Variants => ({
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.3, ease: 'easeOut' as const }
  },
  whileHover: {
    scale: 1.5,
    transition: { duration: 0.2, ease: 'easeOut' as const }
  }
});

export const clientReviewsWheelVariants: Variants = {
  initial: { 
    opacity: 0,
    x: 200,
    rotate: 360,
    scale: 0.3
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      x: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        mass: 1.2
      },
      rotate: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 1.5,
        velocity: 20
      },
      scale: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  },
  hover: {
    scale: 1.02,
    rotate: 3,
    transition: {
      duration: 0.4,
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    }
  }
};

export const clientReviewsWheelRollingVariants: Variants = {
  initial: { 
    opacity: 0,
    x: "100vw",
    rotate: 720,
    scale: 0.5
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
      x: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        mass: 1,
        velocity: 800
      },
      rotate: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
        mass: 0.8,
        velocity: 500
      },
      scale: {
        duration: 0.8,
        ease: "easeOut" as const
      },
      opacity: {
        duration: 0.5
      }
    }
  },
  hover: {
    scale: 1.02,
    rotate: 5,
    transition: {
      duration: 0.3,
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    }
  }
};

// ContactUs section variants
export const contactUsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const contactUsImageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -100,
    scale: 0.8,
    rotate: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const contactUsHeaderVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const contactUsFormVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export const contactUsInputVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: delay,
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
});

// Footer section variants
export const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export const footerLinkVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

// SocialSphere section variants
export const socialSphereVariants = (customDelay: number): Variants => ({
  hidden: { opacity: 0, scale: 0, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15,
      delay: customDelay,
      duration: 0.6,
    },
  },
});

export const socialSphereBounceVariants = (customDelay: number): Variants => ({
  hidden: { y: 0 },
  visible: {
    y: [0, -12, 0],
    transition: {
      duration: 0.5,
      delay: customDelay,
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 1.5,
      ease: 'easeOut' as const,
    },
  },
});

export const socialSphereIconVariants = (customDelay: number): Variants => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: customDelay,
      duration: 0.3,
      type: 'spring' as const,
      stiffness: 200,
    },
  },
});

export const socialSphereGlowVariants = (customDelay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: [0, 0.5, 0],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: customDelay,
      ease: 'easeInOut' as const,
    },
  },
  hover: {
    opacity: 0.8,
    scale: 1.3,
    transition: { duration: 0.3 },
  },
});

// AboutVision section variants
export const aboutVisionCardVariants = (i: number): Variants => ({
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2 * i,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});
// AboutMission section variants - Add these to your variants.ts file
export const aboutMissionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

export const aboutMissionItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 20,
      duration: 0.7,
    },
  },
};

export const aboutMissionImageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 18,
      duration: 0.8,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.02,
    rotate: 2,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

export const aboutMissionTextVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 20,
      delay: 0.3,
    },
  },
};

export const aboutMissionLineVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 64,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const aboutMissionIconVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
      delay: 0.5,
    },
  },
};

// Home extra variants
export const whyChooseUsLineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

export const card3DHoverVariants: Variants = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -10,
    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 18 },
  },
};

export const iconFloatVariants: Variants = {
  rest: { y: 0 },
  float: {
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export const iconPulseVariants: Variants = {
  rest: { scale: 1 },
  pulse: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

// AboutMission section variants
export const aboutMissionCardVariants = (custom: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * custom,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  hover: {
    y: -8,
    transition: { type: 'spring' as const, stiffness: 300 },
  },
});

export const aboutMissionBarVariants = (custom: number): Variants => ({
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 0.8,
      delay: 0.6 + 0.15 * custom,
      ease: 'easeOut' as const,
    },
  },
});

// PoliciesContent section variants
export const policiesContentSectionVariants = (custom: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * custom,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  hover: { y: -2 },
});

export const policiesContentIconVariants = (custom: number): Variants => ({
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 20,
      delay: 0.2 + 0.1 * custom,
    },
  },
});

export const policiesContentChevronVariants: Variants = {
  closed: { rotate: 0 },
  open: {
    rotate: 180,
    transition: { duration: 0.3, ease: 'easeInOut' as const },
  },
};

export const policiesContentPanelVariants: Variants = {
  closed: { height: 0, opacity: 0, overflow: 'hidden' },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ContactForm section variants
export const contactFormCardVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? 40 : -40,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});

export const contactFormFieldVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay },
  },
  focus: { scale: 1.01 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
});

export const contactFormMessageVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3 },
  },
};

export const contactFormInfoColumnVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? -40 : 40,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});

export const contactFormInfoItemVariants = (index: number, isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? -20 : 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.4 + 0.1 * index,
    },
  },
  hover: {
    x: isRTL ? -4 : 4,
    transition: { type: 'spring' as const, stiffness: 300 },
  },
});

export const contactFormSocialVariants: Variants = {
  hover: {
    scale: 1.15,
    backgroundColor: '#767E56',
  },
  tap: { scale: 0.95 },
};

// AppScreenshots card variants
export const appScreenshotsCardItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  },
  flank: {
    opacity: 0.6,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

// ContactUs decorative variants
export const contactUsCircleTopVariants: Variants = {
  initial: { y: 0, scale: 1 },
  animate: {
    y: [0, -15, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export const contactUsCircleBottomVariants: Variants = {
  initial: { y: 0, scale: 1 },
  animate: {
    y: [0, 10, 0],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: 0.5,
    },
  },
};

// WhyChooseUs extra variants
export const whyChooseUsHeaderContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const whyChooseUsTagContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

export const whyChooseUsTagLineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

export const whyChooseUsFeatureTitleVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.6 + 0.2 * index },
  },
});

export const whyChooseUsFeatureDescVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.8 + 0.2 * index },
  },
});

export const whyChooseUsIconInnerVariants: Variants = {
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: { type: 'spring' as const, stiffness: 400 },
  },
};

// ClientReviews extra variants
export const clientReviewsTagVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const clientReviewsNameContainerVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export const clientReviewsNameVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.3 },
  },
};

export const clientReviewsDateVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.4 },
  },
};

export const clientReviewsNavVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

export const clientReviewsTrailVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.5 },
  },
};

export const clientReviewsSpeedLinesVariants: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: '100%',
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

export const clientReviewsDotsContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6 },
  },
};

export const contactUsImageHoverVariants: Variants = {
  hover: {
    scale: 1.02,
    rotate: 2,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 },
  },
};

export const contactUsSubmitMessageVariants: Variants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, y: -20 },
};

export const contactUsSubmitButtonVariants: Variants = {
  hover: {
    scale: 1.02,
    y: -2,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 },
  },
  tap: { scale: 0.98 },
};

export const clientReviewsWheelImageVariants: Variants = {
  hover: {
    scale: 1.02,
    rotate: 5,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 },
  },
};

export const clientReviewsRingVariants = (direction: number): Variants => ({
  initial: { rotate: 0 },
  animate: {
    rotate: 360 * direction,
    transition: {
      duration: direction > 0 ? 8 : 12,
      repeat: Infinity,
      ease: 'linear' as const,
    },
  },
});


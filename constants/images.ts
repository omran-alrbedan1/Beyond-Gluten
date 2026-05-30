// ─── Hero & Banner Images ───────────────────────────────────────
export const    HERO_IMAGES = {
  customDesign: '/assets/custom-design.jpg',
  jewelry: '/assets/hero-jewelry.jpg',
  boutiqueDisplay: '/assets/boutique-gold-display.jpg',
  boutiqueInterior: '/assets/boutique-interior-real.jpg',
  shopInterior: '/assets/shop-interior.jpg',
} as const;

export const ads ={
  hero1:'/assets/images/advertisements/hero1.png',
  hero2:'/assets/images/advertisements/hero2.png',
  hero3:'/assets/images/advertisements/hero3.png',
}

export const wedding={
  weddingSection:'/assets/images/wedding/wedding.png',
}
export const testimonials={
  testimonials1:'/assets/images/testimonials/testimonials1.png',
  testimonials2:'/assets/images/testimonials/testimonials2.png',
  testimonials3:'/assets/images/testimonials/testimonials3.png',
}

export const about ={
  aboutUsHero: '/assets/images/about/about_us_hero.png',
  ourStory: '/assets/images/about/shop.jpg',
  firstShop: '/assets/images/about/shop2.jpg',
  secondShop: '/assets/images/about/shop.jpg',
}

// ─── Service Images ──────────────────────────────────────
export const SERVICE_IMAGES = {
  engagementRings: '/assets/ring.svg',
  weddingRings: '/assets/wedding.svg',
  customNecklaces: '/assets/necklace.svg',
  redesignJewelry: '/assets/Jewelry.svg',
  goldSelection: '/assets/gold.svg',
} as const;
 

// ─── Heritage Images ───────────────────────────────────────────
export const 
HERITAGE_IMAGES = {
  shopfront: '/assets/heritage-shopfront.jpeg',
  shopfrontPng: '/assets/heritage-shopfront.png',
  goldsmithsMarket: '/assets/heritage-goldsmiths-market.png',
  vintage1948: '/assets/heritage-1948.jpg',
} as const;

// ─── Mission & Vision Images ───────────────────────────────────
export const MISSION_VISION_IMAGES = {
  mission: '/assets/mission.jpg',
  vision: '/assets/vision.jpg',
} as const;

// ─── Product Images - Rings ────────────────────────────────────
export const RING_IMAGES = {
  curved: '/assets/images/rings/ring1.jpg',
  emerald: '/assets/images/rings/ring2.jpg',
  exquisite: '/assets/images/rings/ring3.jpg',
  twoTone: '/assets/images/rings/ring4.jpg',
  whiteGold: '/assets/images/rings/ring5.jpg',
} as const;

// ─── Product Images - Necklaces ───────────────────────────────
export const NECKLACE_IMAGES = {
  diamond: '/assets/images/necklaces/necklace1.jpg',
  goldChain: '/assets/images/necklaces/necklace2.jpg',
  goldCuban: '/assets/images/necklaces/necklace3.jpg',
  vlineDiamond: '/assets/images/necklaces/necklace4.jpg',
} as const;

// ─── Product Images - Bracelets ────────────────────────────────
export const BRACELET_IMAGES = {
  cuff: '/assets/images/bracelets/bracelet1.jpg',
  tennis: '/assets/images/bracelets/bracelet2.jpg',
  branchPave: '/assets/images/bracelets/bracelet3.jpg',
  charmsGold: '/assets/images/bracelets/bracelet4.jpg',
  tennisWorn: '/assets/images/bracelets/bracelet5.jpg',
} as const;

// ─── Gallery Images ────────────────────────────────────────────
export const GALLERY_IMAGES = {
  // Rings
  ringGoldStack: '/assets/images/rings/ring6.jpg',
  ringLeafPave: '/assets/images/rings/ring7.jpg',
  ringPaveBand: '/assets/images/rings/ring8.jpg',
  ringPureGoldBand: '/assets/images/rings/ring9.jpg',
  ringsDiamondStackHand: '/assets/images/rings/ring1.jpg',
  
  // Sets & Collections
  goldShirt: '/assets/images/necklaces/necklace5.jpg',
} as const;

// ─── Logo & Brand Images ───────────────────────────────────────
export const BRAND_IMAGES = {
  logo: '/assets/images/logo.jpg',
  logo2: '/assets/images/logo2.png',
  videoLogo: '/assets/video-logo.jpg',
} as const;

// ─── Category Images (for shop by category sections) ───────────
export const CATEGORY_IMAGES = {
  rings: RING_IMAGES.exquisite,
  necklaces: NECKLACE_IMAGES.diamond,
  bracelets: BRACELET_IMAGES.tennis,
  earrings: '',
  pendants: '',
  // TODO: add earrings and pendants images when available
} as const;

// ─── Blog Images ─────────────────────────────────────────────────
export const BLOG_IMAGES = [
  '/assets/images/rings/ring6.jpg',
  '/assets/images/necklaces/necklace3.jpg',
  '/assets/images/bracelets/bracelet2.jpg',
] as const;

// ─── All Images Export (for easy access) ─────────────────────────
export const ALL_IMAGES = {
  hero: HERO_IMAGES,
  heritage: HERITAGE_IMAGES,
  missionVision: MISSION_VISION_IMAGES,
  rings: RING_IMAGES,
  necklaces: NECKLACE_IMAGES,
  bracelets: BRACELET_IMAGES,
  gallery: GALLERY_IMAGES,
  brand: BRAND_IMAGES,
  categories: CATEGORY_IMAGES,
  blog: BLOG_IMAGES,
} as const;

// ─── IMAGES Export (for products.ts compatibility) ───────────────
export const IMAGES = {
  // Gallery images
  necklaceVlineDiamond: NECKLACE_IMAGES.vlineDiamond,
  setGoldShirt: GALLERY_IMAGES.goldShirt,
  ringLeafPave: GALLERY_IMAGES.ringLeafPave,
  ringGoldStack: GALLERY_IMAGES.ringGoldStack,
  ringsDiamondStackHand: GALLERY_IMAGES.ringsDiamondStackHand,
  ringPureGoldBand: GALLERY_IMAGES.ringPureGoldBand,
  ringPaveBand: GALLERY_IMAGES.ringPaveBand,
  
  // Ring images
  ringWhite: RING_IMAGES.whiteGold,
  ringTwoTone: RING_IMAGES.twoTone,
  ringEmerald: RING_IMAGES.emerald,
  ringExquisite: RING_IMAGES.exquisite,
  ringCurved: RING_IMAGES.curved,
  
  // Necklace images
  necklaceGoldCuban: NECKLACE_IMAGES.goldCuban,
  necklaceDiamond: NECKLACE_IMAGES.diamond,
  necklaceGoldChain: NECKLACE_IMAGES.goldChain,
  
  // Bracelet images
  braceletBranchPave: BRACELET_IMAGES.branchPave,
  braceletCharmsGold: BRACELET_IMAGES.charmsGold,
  braceletTennisWorn: BRACELET_IMAGES.tennisWorn,
  braceletTennis: BRACELET_IMAGES.tennis,
  braceletCuff: BRACELET_IMAGES.cuff,
  
} as const;

import { IMAGES } from "./images";

export type ProductCategory = "rings" | "necklaces" | "bracelets";

export interface Product {
  id: string;
  name: string;
  tagline?: string;
  image: string;
  category: ProductCategory;
  price?: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  // ---------- Featured editorial pieces (top of the gallery) ----------
  {
    id: "n-101",
    name: "V-Line Diamond Collar",
    tagline: "Celebrate your sparkle, made from the heart.",
    image: IMAGES.necklaceVlineDiamond,
    category: "necklaces",
    featured: true,
  },
  {
    id: "s-101",
    name: "Layered Gold Suite",
    tagline: "Necklace, cuff and rings in pure 18K.",
    image: IMAGES.setGoldShirt,
    category: "necklaces",
    featured: true,
  },
  {
    id: "r-101",
    name: "Pavé Leaf Statement Ring",
    tagline: "Shining softly with every move.",
    image: IMAGES.ringLeafPave,
    category: "rings",
    featured: true,
  },

  // ---------- Rings ----------
  {
    id: "r-102",
    name: "Gold Stack Duo",
    tagline: "Architectural geometry, hand-finished.",
    image: IMAGES.ringGoldStack,
    category: "rings",
  },
  {
    id: "r-104",
    name: "Diamond Stacking Rings",
    tagline: "Layered sparkle for everyday elegance.",
    image: IMAGES.ringsDiamondStackHand,
    category: "rings",
  },
  {
    id: "r-105",
    name: "Pure Gold Band",
    tagline: "Pure elegance in 18K perfection.",
    image: IMAGES.ringPureGoldBand,
    category: "rings",
  },
  {
    id: "r-103",
    name: "Pavé Half-Eternity",
    tagline: "A symbol of love and brilliance.",
    image: IMAGES.ringPaveBand,
    category: "rings",
  },
  {
    id: "r-001",
    name: "White Gold Solitaire",
    tagline: "Whispers elegance in every detail.",
    image: IMAGES.ringWhite,
    category: "rings",
  },
  {
    id: "r-002",
    name: "Two-Tone Halo",
    tagline: "Two elements in perfect harmony.",
    image: IMAGES.ringTwoTone,
    category: "rings",
  },
  {
    id: "r-003",
    name: "Emerald Heirloom",
    tagline: "Crafted by nature, perfected by design.",
    image: IMAGES.ringEmerald,
    category: "rings",
  },
  {
    id: "r-004",
    name: "Exquisite Brilliance",
    tagline: "For those who value understated luxury.",
    image: IMAGES.ringExquisite,
    category: "rings",
  },
  {
    id: "r-005",
    name: "Curved Pavé Band",
    tagline: "Pure in tone, bold in elegance.",
    image: IMAGES.ringCurved,
    category: "rings",
  },

  // ---------- Necklaces ----------
  {
    id: "n-102",
    name: "Cuban Link Chain",
    tagline: "Weighted gold, worn with intention.",
    image: IMAGES.necklaceGoldCuban,
    category: "necklaces",
  },
  {
    id: "n-001",
    name: "Solitaire Diamond Drop",
    tagline: "A single brilliance, beautifully held.",
    image: IMAGES.necklaceDiamond,
    category: "necklaces",
  },
  {
    id: "n-002",
    name: "18K Rope Chain",
    tagline: "Light woven into gold.",
    image: IMAGES.necklaceGoldChain,
    category: "necklaces",
  },

  // ---------- Bracelets ----------
  {
    id: "b-101",
    name: "Pavé Branch Cuff",
    tagline: "Nature, set in diamonds.",
    image: IMAGES.braceletBranchPave,
    category: "bracelets",
  },
  {
    id: "b-103",
    name: "Golden Charm Bracelet",
    tagline: "Playful symbols, polished in gold.",
    image: IMAGES.braceletCharmsGold,
    category: "bracelets",
  },
  {
    id: "b-102",
    name: "Diamond Tennis Line",
    tagline: "An effortless ribbon of light.",
    image: IMAGES.braceletTennisWorn,
    category: "bracelets",
  },
  {
    id: "b-001",
    name: "Diamond Tennis Pair",
    tagline: "Sparkle that follows every gesture.",
    image: IMAGES.braceletTennis,
    category: "bracelets",
  },
  {
    id: "b-002",
    name: "Sculpted Gold Cuff",
    tagline: "Architectural, effortless, eternal.",
    image: IMAGES.braceletCuff,
    category: "bracelets",
  },

];

// Service functions
export async function getFeaturedProducts(): Promise<Product[]> {
  return Promise.resolve(PRODUCTS.filter(p => p.featured));
}

export async function getProductsByCategory(category: ProductCategory | "all"): Promise<Product[]> {
  console.log('getProductsByCategory called with:', category, 'PRODUCTS length:', PRODUCTS.length);
  if (category === "all") {
    console.log('Returning all products:', PRODUCTS.length);
    return Promise.resolve(PRODUCTS);
  }
  const filtered = PRODUCTS.filter((p) => p.category === category);
  console.log('Returning filtered products:', filtered.length);
  return Promise.resolve(filtered);
}

export async function getProductById(id: string): Promise<Product | null> {
  return Promise.resolve(PRODUCTS.find((p) => p.id === id) ?? null);
}

export const SITE = {
  name: "Rovana Jewelry",
  shortName: "Rovana",
  tagline: "Elegance in Every Detail",
  established: 1921,
  description:
    "A legacy of craftsmanship and trust since 1948 - Jordan's family-owned house of fine diamond and gold jewelry.",
} as const;

export const CONTACT = {
  phoneDisplay: "0981 117 927",
  phoneTel: "+963981117927",
  whatsappNumber: "963981117927",
  email: "rovanajewellery@gmail.com",
  address: {
    line1: "Al-Salihiya, Next to Abou Abdo Juice",
    line1Ar: "الصالحية، بجانب عصير أبو عبدو",
    line2: "Damascus, Syria",
    line2Ar: "دمشق، سوريا",
    full: "Al-Salihiya, Next to Abou Abdo Juice, Damascus, Syria",
    fullAr: "الصالحية، بجانب عصير أبو عبدو، دمشق، سوريا",
  },
  mapsDirections: "https://www.google.com/maps/search/?api=1&query=Al-Salihiya+Damascus+Syria",
  mapsEmbed: "https://www.google.com/maps?q=Al-Salihiya+Damascus+Syria&output=embed",
  hours: [
    { day: "Saturday - Thursday", dayAr: "السبت - الخميس", time: "10:00 - 20:30" },
    { day: "Friday", dayAr: "الجمعة", time: "Closed" },
  ],
} as const;

export const SOCIAL = {
  instagram: "#",
  facebook: "#",
} as const;

export const NAV_LINKS = [
  { to: "/", labelKey: "home" },
  { to: "/about", labelKey: "about" },
  { to: "/custom-design", labelKey: "customDesign" },
  { to: "/contact", labelKey: "contact" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { to: "/blog", labelKey: "blog" },
  { to: "/policies", labelKey: "policies" },
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X, ZoomIn } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { PRODUCTS, type Product, type ProductCategory } from "@/constants/products";

// Product localization
const PRODUCT_AR: Record<string, { name: string; tagline?: string }> = {
  "n-101": { name: "قلادة ألماس V-Line", tagline: "احتفلي ببريقك بقطعة صنعت من القلب." },
  "s-101": { name: "طقم ذهب متعدد الطبقات", tagline: "قلادة وسوار وخواتم من ذهب 18 قيراط." },
  "r-101": { name: "خاتم ورق مرصع", tagline: "يلمع بنعومة مع كل حركة." },
  "r-102": { name: "خاتمان ذهبيان متداخلان", tagline: "تصميم هندسي بلمسة يدوية متقنة." },
  "r-103": { name: "خاتم نصف إتيرنتي مرصع", tagline: "رمز للحب والبريق." },
  "r-104": { name: "خواتم ألماس متراكبة", tagline: "بريق متعدد لإطلالة يومية أنيقة." },
  "r-105": { name: "خاتم ذهب نقي", tagline: "أناقة نقية بذهب 18 قيراط." },
  "r-001": { name: "خاتم سوليتير ذهب أبيض", tagline: "أناقة هادئة في كل تفصيل." },
  "r-002": { name: "خاتم هالو بلونين", tagline: "عنصران بتناغم مثالي." },
  "r-003": { name: "خاتم زمرد تراثي", tagline: "صاغته الطبيعة وأتقنه التصميم." },
  "r-004": { name: "خاتم بريق فاخر", tagline: "لمن يقدر الفخامة الهادئة." },
  "r-005": { name: "خاتم منحني مرصع", tagline: "نقاء في اللون وجرأة في الأناقة." },
  "n-102": { name: "سلسلة كوبان ذهبية", tagline: "ذهب بوزن وحضور." },
  "n-001": { name: "قلادة ألماس سوليتير", tagline: "بريق واحد بإطار جميل." },
  "n-002": { name: "سلسلة حبل 18 قيراط", tagline: "خيوط من الضوء منسوجة بالذهب." },
  "b-101": { name: "سوار غصن مرصع", tagline: "الطبيعة مرصعة بالألماس." },
  "b-102": { name: "سوار تنس ألماس", tagline: "خط ناعم من الضوء." },
  "b-103": { name: "أسوارة تعليقات ذهبية", tagline: "رموز مرحة مصقولة بالذهب." },
  "b-001": { name: "زوج أساور تنس ألماس", tagline: "بريق يرافق كل حركة." },
  "b-002": { name: "سوار ذهب منحوت", tagline: "تصميم معماري خالد." },
};

const CATEGORY_KEYS: Record<ProductCategory, string> = {
  rings: "category.rings",
  necklaces: "category.necklaces",
  bracelets: "category.bracelets",
};

function localizeProduct(product: Product, language: string) {
  if (language === "en") return { name: product.name, tagline: product.tagline };
  return PRODUCT_AR[product.id] ?? { name: product.name, tagline: product.tagline };
}

// Convert products to gallery format
const galleryImages = PRODUCTS.map((product) => ({
  id: product.id,
  url: product.image,
  title: product.name,
  category: product.category,
}));

interface LuxeGalleryProps {
  withFeaturedRow?: boolean;
  className?: string;
  showHeading?: boolean;
}

export function LuxeGallery({ withFeaturedRow = true, className = "", showHeading = true }: LuxeGalleryProps) {
  const t = useTranslations('home');
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...new Set(PRODUCTS.map((product) => product.category)),
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    imageId: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  // Get localized data for selected image
  const getLocalizedData = (imageId: string) => {
    const product = PRODUCTS.find(p => p.id === imageId);
    if (product) {
      return localizeProduct(product, locale);
    }
    return { name: '', tagline: '' };
  };

  const selectedLocalizedData = selectedImage ? getLocalizedData(selectedImage) : null;

  return (
    <section
      className={`w-full bg-background px-4 py-16 ${className}`}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
            role="region"
            aria-labelledby="gallery-heading"
          >
            <Badge className="mb-4" variant="secondary">
              <Grid className="mr-1 h-3 w-3" />
              {t('collection.eyebrow')}
            </Badge>
            <h2
              id="gallery-heading"
              className="mb-4 text-4xl font-bold tracking-tight"
            >
              {t('collection.title1')} {t('collection.title2')}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t('collection.subtitle')}
            </p>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Gallery categories"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category === "all" ? t('category.all') : t(CATEGORY_KEYS[category as ProductCategory])}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery items"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              const localized = getLocalizedData(image.id);
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  role="listitem"
                  className=""
                >
                  <Card
                    className="group relative cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-xl"
                    onClick={() => setSelectedImage(image.id)}
                    onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${localized.name}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={image.url}
                        alt={localized.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                      >
                        <ZoomIn className="mb-2 h-6 w-6 text-[var(--muted-foreground)]" />
                        <h3 className="mb-1 text-center text-base font-semibold text-white">
                          {localized.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {t(CATEGORY_KEYS[image.category as ProductCategory])}
                        </Badge>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && selectedLocalizedData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
              aria-describedby="gallery-dialog-description"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                {/* Close Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -right-12 top-0 text-white hover:bg-white/10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery dialog"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="View previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="View next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <motion.img
                  key={selectedImage}
                  src={selectedImageData.url}
                  alt={selectedLocalizedData.name}
                  className="max-h-[80vh] w-auto rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-center text-white"
                  id="gallery-dialog-description"
                >
                  <h3
                    className="mb-2 text-xl font-semibold"
                    id="gallery-dialog-title"
                  >
                    {selectedLocalizedData.name}
                  </h3>
                  {selectedLocalizedData.tagline && (
                    <p className="mb-2 text-sm text-white/80 italic">
                      {selectedLocalizedData.tagline}
                    </p>
                  )}
                  <Badge variant="secondary">
                    {t(CATEGORY_KEYS[selectedImageData.category as ProductCategory])}
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
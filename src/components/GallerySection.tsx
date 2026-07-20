import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { GalleryImage } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Store Front' | 'Shelves' | 'Products' | 'Equipment' | 'Team'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: ('All' | 'Store Front' | 'Shelves' | 'Products' | 'Equipment' | 'Team')[] = [
    'All', 'Store Front', 'Shelves', 'Products', 'Equipment', 'Team'
  ];

  // Filter images based on selected tab
  const filteredImages = activeFilter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    // Find absolute index in the filtered list
    const index = filteredImages.findIndex(img => img.id === image.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <section id="gallery-page-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
          Visual Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
          Explore Our Store & Products
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Take a virtual walk inside Sri Pawanputra Hanuman Medical. Check out our neat shelves, state-of-the-art diagnostic equipment, and premium healthcare categories.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div id="gallery-filters" className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Display (Masonry Grid Simulation using standard grid column counts with staggered aspect ratios) */}
      <div id="masonry-gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            id={`gallery-item-${image.id}`}
            onClick={() => openLightbox(image)}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300"
          >
            {/* Image Wrap */}
            <div className={`relative overflow-hidden ${image.aspectRatio} bg-slate-100 dark:bg-slate-950`}>
              <img
                src={image.imageUrl}
                alt={image.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/95 text-slate-900 p-3 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-350">
                  <Maximize2 className="h-4.5 w-4.5 text-emerald-600" />
                </div>
              </div>

              {/* Tag Category */}
              <span className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono shadow-sm">
                {image.category}
              </span>
            </div>

            {/* Label Caption */}
            <div className="p-4 border-t border-slate-50 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-850 dark:text-slate-200 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {image.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/20 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
          <ImageIcon className="h-12 w-12 text-slate-400 mx-auto animate-pulse" />
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mt-3">No images found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try changing your category filters.</p>
        </div>
      )}

      {/* Lightbox Modal (Popup) */}
      {lightboxIndex !== null && (
        <div 
          id="gallery-lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 animate-in fade-in"
        >
          {/* Top Panel Controls */}
          <div className="flex justify-between items-center text-white py-2 px-4 select-none">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              Image {lightboxIndex + 1} of {filteredImages.length} • {filteredImages[lightboxIndex].category}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-rose-400 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Visual Carousel area */}
          <div className="flex-1 flex items-center justify-between gap-4 max-w-5xl mx-auto w-full">
            {/* Prev Trigger */}
            <button
              onClick={prevImage}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white disabled:opacity-20 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Displayed Image */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-250"
            >
              <img
                src={filteredImages[lightboxIndex].imageUrl}
                alt={filteredImages[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-full object-contain mx-auto"
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={nextImage}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white disabled:opacity-20 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Captions */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900/85 backdrop-blur-md border border-slate-800 p-5 rounded-2xl max-w-2xl mx-auto w-full text-center text-white space-y-1 mb-4 select-none shadow-xl"
          >
            <h4 className="text-base sm:text-lg font-bold font-display text-emerald-400">
              {filteredImages[lightboxIndex].title}
            </h4>
            <p className="text-xs text-slate-400">
              Sri Pawanputra Hanuman Medical, Tekari Rd, Gaya, Bihar
            </p>
          </div>

        </div>
      )}

    </section>
  );
}

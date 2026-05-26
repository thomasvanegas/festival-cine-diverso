import React from 'react';

interface GalleryProps {
  images: { src: string; alt?: string }[];
  title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <img src="/Fondo.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>
      {title && (
        <h2 className="text-3xl font-black text-center mb-12 text-purple-900 drop-shadow">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-4 py-4 mx-auto max-w-screen-xl">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-lg bg-white border border-purple-100 hover:border-pink-400 transition-all duration-300 overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt || `Galería ${idx + 1}`}
              className="w-full h-56 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

// TailwindCSS extra: oculta scrollbar en navegadores modernos
// .hide-scrollbar::-webkit-scrollbar { display: none; }
// .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

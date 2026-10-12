import React from 'react';

/**
 * El marco es 7:10 (casi A4), la proporción de la mayoría de los posters de la edición.
 * Los posters con proporción cercana se recortan (cover) sin perder contenido
 * relevante; los muy anchos (apaisados), casi cuadrados o muy estrechos se
 * muestran completos (contain) sobre su propio reflejo desenfocado, para no
 * cortar títulos ni dejar barras vacías.
 */
const COVER_MIN_RATIO = 0.64;
const COVER_MAX_RATIO = 0.77;

interface PosterImageProps {
  src: string;
  alt: string;
  /** Ancho / alto del poster original. */
  ratio: number;
  /** Cargar de inmediato (solo para imágenes visibles al abrir la página). */
  eager?: boolean;
  className?: string;
}

/** Marco 2:3 uniforme para cualquier poster. */
const PosterImage: React.FC<PosterImageProps> = ({ src, alt, ratio, eager = false, className = '' }) => {
  const cover = ratio >= COVER_MIN_RATIO && ratio <= COVER_MAX_RATIO;

  return (
    <div className={`relative aspect-[7/10] w-full overflow-hidden bg-edicion25-noche ${className}`}>
      {!cover && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-xl"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`relative h-full w-full ${cover ? 'object-cover' : 'object-contain'}`}
      />
    </div>
  );
};

export default PosterImage;

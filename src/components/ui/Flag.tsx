import React from 'react';
import { nombresPais } from '../../data/seleccionOficial2026';
import type { CodigoPais } from '../../data/seleccionOficial2026';

interface FlagProps {
  /** Código ISO 3166-1 alfa-2 del país (ej. 'co'). */
  code: CodigoPais;
  /** Clases Tailwind para el tamaño (por defecto 24×18 px, proporción 4:3). */
  className?: string;
}

/**
 * Bandera de un país (SVG local en `/public/flags/<codigo>.svg`).
 *
 * Se usa imagen y no emoji porque Chrome en Windows no dibuja los emojis de
 * bandera. El nombre del país queda disponible como `alt` y `title`
 * (lectores de pantalla y tooltip) aunque visualmente solo se vea la bandera.
 */
const Flag: React.FC<FlagProps> = ({ code, className = 'h-[18px] w-6' }) => {
  const nombre = nombresPais[code];
  return (
    <img
      src={`/flags/${code}.svg`}
      alt={nombre}
      title={nombre}
      loading="lazy"
      draggable={false}
      className={`${className} inline-block rounded-[3px] object-cover ring-1 ring-white/20 shadow-sm`}
    />
  );
};

export default Flag;

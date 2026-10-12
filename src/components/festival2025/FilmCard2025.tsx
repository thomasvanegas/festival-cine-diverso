import React from 'react';
import { Award } from 'lucide-react';
import type { Corto2025 } from '../../data/festival2025';
import Flag from '../ui/Flag';
import PosterImage from './PosterImage';
import type { Tone } from './SectionHeading';

/** Listón de ganador: solo se usa en los 4 cortometrajes premiados. */
export const WinnerBadge: React.FC<{ className?: string; label?: string }> = ({ className = '', label = 'Ganador' }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-edicion25-sol to-edicion25-ambar px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-edicion25-ciruela shadow-md ${className}`}
  >
    <Award className="h-3.5 w-3.5" aria-hidden="true" />
    {label}
  </span>
);

/** Banderas del/los país(es). El nombre queda en `alt`/`title` (lectores de pantalla y tooltip). */
const FlagList: React.FC<{ paises: Corto2025['paises']; ringClassName: string }> = ({ paises, ringClassName }) => {
  if (paises.length === 0) return null;
  return (
    <span className="flex items-center gap-1.5">
      {paises.map((code) => (
        <Flag key={code} code={code} ringClassName={ringClassName} />
      ))}
    </span>
  );
};

const toneStyles: Record<Tone, { card: string; title: string; meta: string; flagRing: string }> = {
  light: {
    card: 'border border-edicion25-violeta/15 bg-white shadow-sm hover:shadow-lg hover:shadow-edicion25-violeta/15',
    title: 'text-edicion25-ciruela',
    meta: 'text-edicion25-tierra',
    flagRing: 'ring-black/20',
  },
  dark: {
    card: 'border border-edicion25-lila/20 bg-edicion25-ciruela/70 hover:border-edicion25-sol/50',
    title: 'text-edicion25-crema',
    meta: 'text-edicion25-mantequilla/85',
    flagRing: 'ring-white/30',
  },
};

interface FilmCardProps {
  film: Corto2025;
  tone?: Tone;
}

/**
 * Tarjeta de un cortometraje: poster, título, dirección y bandera(s) del país.
 * No es un enlace (no hay "ver obra"): el poster es el protagonista.
 */
export const FilmCard: React.FC<FilmCardProps> = ({ film, tone = 'light' }) => {
  const s = toneStyles[tone];
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 ${s.card}`}>
      <div className="relative">
        <PosterImage src={film.poster} alt={`Poster de ${film.titulo}`} ratio={film.posterRatio} />
        {film.ganador && <WinnerBadge className="absolute left-2 top-2" />}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <h3 className={`font-futura text-sm font-bold leading-snug sm:text-base ${s.title}`}>{film.titulo}</h3>
        <p className={`text-xs leading-snug sm:text-sm ${s.meta}`}>Dir. {film.director}</p>
        <div className="mt-auto pt-2">
          <FlagList paises={film.paises} ringClassName={s.flagRing} />
        </div>
      </div>
    </article>
  );
};

/** Variante grande para la sección de ganadores (sobre fondo claro). */
export const WinnerCard: React.FC<{ film: Corto2025 }> = ({ film }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-4 ring-edicion25-sol/80 transition-shadow duration-300 hover:shadow-2xl hover:shadow-edicion25-violeta/25">
    <PosterImage src={film.poster} alt={`Poster de ${film.titulo}`} ratio={film.posterRatio} />
    <div className="flex flex-1 flex-col gap-2 p-5">
      <WinnerBadge className="self-start" label="Cortometraje ganador" />
      <h3 className="font-futura text-xl font-black leading-tight text-edicion25-ciruela">{film.titulo}</h3>
      <p className="text-sm text-edicion25-tierra">Dir. {film.director}</p>
      <div className="mt-auto pt-2">
        <FlagList paises={film.paises} ringClassName="ring-black/20" />
      </div>
    </div>
  </article>
);

export default FilmCard;

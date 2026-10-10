import React, { useMemo, useState } from 'react';
import { Calendar, MapPin, Film, Eye } from 'lucide-react';
import {
  categorias2026,
  cortos2026,
  type CategoriaId,
  type Corto2026,
} from '../data/seleccionOficial2026';
import Flag from './ui/Flag';
import FilmSynopsisModal from './ui/FilmSynopsisModal';

/** Posters casi cuadrados o horizontales se muestran completos (sin recorte). */
const MAX_RATIO_COVER = 0.85;

interface FilmCardProps {
  film: Corto2026;
  onOpen: (film: Corto2026) => void;
}

/** Card de un cortometraje: poster, título, dirección, bandera, año y botón de sinopsis. */
const FilmCard: React.FC<FilmCardProps> = ({ film, onOpen }) => {
  const fit = film.posterRatio > MAX_RATIO_COVER ? 'object-contain' : 'object-cover';

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-festivalRed/60 hover:shadow-xl hover:shadow-festivalRed/10">
      <div
        className="relative aspect-[2/3] cursor-pointer overflow-hidden bg-black"
        onClick={() => onOpen(film)}
        role="presentation"
      >
        <img
          src={film.poster}
          alt={`Poster de ${film.titulo}`}
          loading="lazy"
          className={`h-full w-full ${fit} transition-transform duration-500 group-hover:scale-105`}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="line-clamp-2 font-futura text-base font-bold uppercase leading-snug tracking-wide text-white">
          {film.titulo}
        </h4>
        <p className="line-clamp-2 font-sans text-xs font-medium uppercase tracking-wider text-zinc-400">
          {film.director.toUpperCase()}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="flex items-center gap-1.5">
            {film.paises.map((code) => (
              <Flag key={code} code={code} />
            ))}
          </span>
          <span className="font-ample text-xs font-bold tracking-widest text-zinc-500">{film.anio}</span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(film)}
          aria-label={`Ver sinopsis de ${film.titulo}`}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-festivalRed/60 px-4 py-2 font-futura text-xs font-bold uppercase tracking-wider text-festivalRed transition-all duration-300 hover:bg-festivalRed hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-festivalRed focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Eye className="h-4 w-4" />
          Ver sinopsis
        </button>
      </div>
    </article>
  );
};

/**
 * IV Edición (2026) — Selección Oficial.
 *
 * Presenta los cortometrajes seleccionados en las 4 categorías. Es una edición
 * en curso: no muestra ganadores ni premiación. Usa la misma identidad visual
 * del home (fondo negro, rojo festivalRed, Futura/AmpleSoft, textura grunge).
 */
const Festival2026: React.FC = () => {
  const [selected, setSelected] = useState<Corto2026 | null>(null);

  const secciones = useMemo(
    () =>
      categorias2026.map((cat) => ({
        ...cat,
        cortos: cortos2026.filter((c) => c.categoria === cat.id),
      })),
    [],
  );

  const labelDe = (id: CategoriaId) => categorias2026.find((c) => c.id === id)?.titulo;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white animate-fade-in">
      {/* Hero */}
      <header className="relative flex flex-col items-center px-6 pb-12 pt-32 text-center md:pt-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-festivalRed/25 via-black/70 to-black" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-texture-196 opacity-[0.09] mix-blend-overlay" />

        <div className="mb-6 rounded-full border border-festivalRed/50 bg-festivalRed/20 px-5 py-2 font-ample text-xs font-bold uppercase tracking-widest text-red-200 backdrop-blur-md md:text-sm">
          IV Edición • 2026
        </div>

        <img
          src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/LOGOTIPO BLANCO.png"
          alt="IV Festival Internacional de Cine Diverso"
          className="w-full max-w-xs md:max-w-sm drop-shadow-[0_4px_20px_rgba(250,2,1,0.4)]"
        />

        <h1 className="mt-6 font-futura text-3xl font-black uppercase tracking-widest text-festivalRed md:text-5xl">
          Selección Oficial
        </h1>
        <p className="mt-2 max-w-xl font-sans text-sm font-light italic text-zinc-300 md:text-base">
          La Memoria Revelada
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-full border border-zinc-800 bg-black/40 px-6 py-3 text-sm font-medium backdrop-blur-md md:gap-8">
          <span className="flex items-center gap-1.5 font-ample uppercase tracking-wider text-festivalRed">
            <Calendar className="h-4 w-4" />4 — 7 de noviembre de 2026
          </span>
          <span className="hidden text-zinc-800 md:inline">|</span>
          <span className="flex items-center gap-1.5 font-ample uppercase tracking-wider text-white">
            <MapPin className="h-4 w-4" />
            Barranquilla, Colombia
          </span>
        </div>

        <p className="mt-6 flex items-center gap-2 font-ample text-xs font-bold uppercase tracking-widest text-zinc-400">
          <Film className="h-4 w-4 text-festivalRed" />
          {cortos2026.length} cortometrajes · 4 categorías
        </p>

        {/* Acceso rápido a cada categoría */}
        <nav aria-label="Categorías de la selección oficial" className="mt-8 flex flex-wrap justify-center gap-3">
          {secciones.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 font-futura text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:border-festivalRed hover:text-festivalRed md:text-sm"
            >
              {s.titulo} <span className="ml-1 text-zinc-500">({s.cortos.length})</span>
            </a>
          ))}
        </nav>
      </header>

      {/* Categorías */}
      <main className="relative bg-black px-6 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-texture-196 opacity-[0.06] mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-20">
          {secciones.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 animate-fade-in-up">
              <div className="mb-8 border-b border-zinc-800 pb-4">
                <p className="font-ample text-xs font-bold uppercase tracking-widest text-festivalRed">
                  Selección Oficial 2026
                </p>
                <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-futura text-2xl font-black uppercase tracking-wide text-white md:text-4xl">
                    {s.titulo}
                  </h2>
                  <span className="font-ample text-sm font-bold tracking-widest text-zinc-500">
                    {s.cortos.length} cortos
                  </span>
                </div>
                <p className="mt-2 font-sans text-sm font-light text-zinc-400">{s.descripcion}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                {s.cortos.map((film) => (
                  <FilmCard key={film.id} film={film} onOpen={setSelected} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <FilmSynopsisModal
        film={selected}
        categoriaLabel={selected ? labelDe(selected.categoria) : undefined}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Festival2026;

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Flag from './Flag';
import type { Corto2026 } from '../../data/seleccionOficial2026';

interface FilmSynopsisModalProps {
  /** Corto a mostrar; si es `null` el modal no se renderiza. */
  film: Corto2026 | null;
  /** Etiqueta de la categoría del corto (ej. "Ficción Internacional"). */
  categoriaLabel?: string;
  /** Cierra el modal. */
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Ventana modal (tema oscuro, identidad 2026) con la ficha de un cortometraje:
 * poster, título, director, país (solo bandera), año y sinopsis.
 *
 * Se cierra con la "X", al hacer clic en el fondo oscuro o con la tecla Esc.
 * Mientras está abierto bloquea el scroll de la página, mantiene el foco
 * dentro del diálogo y lo devuelve al botón que lo abrió al cerrarse.
 */
const FilmSynopsisModal: React.FC<FilmSynopsisModalProps> = ({ film, categoriaLabel, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = film !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!film) return null;

  const titleId = `sinopsis-titulo-${film.id}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm animate-fade-in sm:p-6"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-festivalRed/30 bg-zinc-950 shadow-2xl shadow-festivalRed/10 md:flex-row"
      >
        {/* Textura grunge de la identidad 2026 */}
        <div className="pointer-events-none absolute inset-0 bg-texture-188 opacity-[0.05] mix-blend-overlay" />

        <button
          ref={closeRef}
          type="button"
          aria-label="Cerrar sinopsis"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full border border-zinc-700 bg-black/70 p-2 text-white transition-colors hover:border-festivalRed hover:bg-festivalRed focus:outline-none focus-visible:ring-2 focus-visible:ring-festivalRed"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Poster */}
        <div className="relative flex shrink-0 items-center justify-center bg-black md:w-[42%]">
          <img
            src={film.poster}
            alt={`Poster de ${film.titulo}`}
            className="max-h-[38vh] w-full object-contain md:max-h-[92vh]"
          />
        </div>

        {/* Ficha */}
        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto p-6 md:p-8">
          {categoriaLabel && (
            <p className="mb-2 pr-10 font-ample text-xs font-bold uppercase tracking-widest text-festivalRed">
              {categoriaLabel}
            </p>
          )}
          <h3 id={titleId} className="pr-10 font-futura text-2xl font-black uppercase leading-tight tracking-wide text-white md:text-3xl">
            {film.titulo}
          </h3>

          <dl className="mt-5 grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 border-y border-zinc-800 py-4 font-sans text-sm">
            <dt className="font-ample text-xs font-bold uppercase tracking-widest text-zinc-500">Dirección</dt>
            <dd className="font-semibold uppercase tracking-wide text-white">{film.director.toUpperCase()}</dd>

            <dt className="font-ample text-xs font-bold uppercase tracking-widest text-zinc-500">País</dt>
            <dd className="flex items-center gap-2">
              {film.paises.map((code) => (
                <Flag key={code} code={code} className="h-5 w-[27px]" />
              ))}
            </dd>

            <dt className="font-ample text-xs font-bold uppercase tracking-widest text-zinc-500">Año</dt>
            <dd className="font-semibold text-white">{film.anio}</dd>
          </dl>

          <div className="mt-5">
            <h4 className="mb-2 font-ample text-xs font-bold uppercase tracking-widest text-festivalRed">Sinopsis</h4>
            <p className="font-sans text-sm font-light leading-relaxed text-zinc-300 md:text-base">{film.sinopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmSynopsisModal;

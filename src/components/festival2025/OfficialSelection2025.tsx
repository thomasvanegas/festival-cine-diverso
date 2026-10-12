import React, { useMemo, useState } from 'react';
import { decor2025, seleccionOficial2025, type Corto2025 } from '../../data/festival2025';
import { FilmCard } from './FilmCard2025';
import SectionHeading from './SectionHeading';

type Filtro = 'todas' | 'colombia' | 'internacional';

const esColombiana = (film: Corto2025) => film.paises.includes('co');

const filtros: Array<{ id: Filtro; label: string; test: (film: Corto2025) => boolean }> = [
  { id: 'todas', label: 'Todas', test: () => true },
  { id: 'colombia', label: 'Colombia', test: esColombiana },
  { id: 'internacional', label: 'Internacionales', test: (film) => !esColombiana(film) },
];

/**
 * Selección oficial: las 50 obras con poster, título, dirección y bandera del país.
 * El listón de ganador aparece solo en los 4 cortometrajes premiados.
 */
const OfficialSelection2025: React.FC = () => {
  const [filtro, setFiltro] = useState<Filtro>('todas');

  const conteos = useMemo(
    () => Object.fromEntries(filtros.map((f) => [f.id, seleccionOficial2025.filter(f.test).length])) as Record<Filtro, number>,
    [],
  );
  const visibles = useMemo(
    () => seleccionOficial2025.filter(filtros.find((f) => f.id === filtro)!.test),
    [filtro],
  );

  return (
    <section
      id="seleccion-oficial"
      aria-labelledby="seleccion-title"
      className="relative scroll-mt-28 overflow-hidden bg-edicion25-papel py-16 md:py-24"
    >
      <img
        src={decor2025.floresMoradas}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -left-10 top-6 w-24 opacity-30 sm:w-36"
      />
      <img
        src={decor2025.floresAmarillas2}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-8 top-10 w-24 opacity-40 sm:w-36"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          id="seleccion-title"
          eyebrow="Selección oficial"
          title="Selección Oficial 2025"
          description="Obras de ficción y no ficción de más de 7 países que ampliaron la conversación y permitieron que distintas realidades dialogaran desde la pantalla."
        />

        <div role="group" aria-label="Filtrar por origen" className="mb-8 flex flex-wrap justify-center gap-3">
          {filtros.map((f) => {
            const activo = f.id === filtro;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={activo}
                onClick={() => setFiltro(f.id)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-edicion25-violeta focus-visible:ring-offset-2 focus-visible:ring-offset-edicion25-papel ${
                  activo
                    ? 'border-edicion25-violeta bg-edicion25-violeta text-edicion25-crema'
                    : 'border-edicion25-violeta/40 bg-white text-edicion25-violeta hover:border-edicion25-violeta'
                }`}
              >
                {f.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activo ? 'bg-edicion25-crema/20 text-edicion25-crema' : 'bg-edicion25-violeta/10 text-edicion25-violeta'
                  }`}
                >
                  {conteos[f.id]}
                </span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando {visibles.length} cortometrajes
        </p>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {visibles.map((film) => (
            <li key={film.id}>
              <FilmCard film={film} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OfficialSelection2025;

import React from 'react';
import { decor2025, ganadores2025 } from '../../data/festival2025';
import { WinnerCard } from './FilmCard2025';
import SectionHeading from './SectionHeading';

/** Cortometrajes ganadores: 4 posters grandes sobre el cielo amarillo del poster. */
const Winners2025: React.FC = () => (
  <section
    id="ganadores"
    aria-labelledby="ganadores-title"
    className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-edicion25-mantequilla to-edicion25-crema py-16 md:py-24"
  >
    <img
      src={decor2025.resplandor}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="pointer-events-none absolute left-1/2 top-0 w-[160%] max-w-none -translate-x-1/2 opacity-40 sm:w-[100%]"
    />
    <img
      src={decor2025.floresMoradas}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="pointer-events-none absolute -right-8 top-4 w-24 opacity-80 sm:w-36 lg:w-48"
    />
    <img
      src={decor2025.floresAmarillas1}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="pointer-events-none absolute -left-6 bottom-4 w-24 opacity-80 sm:w-32 lg:w-44"
    />

    <div className="relative mx-auto max-w-7xl px-6">
      <SectionHeading
        id="ganadores-title"
        eyebrow="Premiación"
        title="Cortometrajes ganadores 2025"
        description="Las obras que el festival reconoció en su tercera edición."
      />

      <ul className="mx-auto grid max-w-sm grid-cols-1 gap-6 min-[560px]:max-w-none min-[560px]:grid-cols-2 lg:grid-cols-4">
        {ganadores2025.map((film) => (
          <li key={film.id}>
            <WinnerCard film={film} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Winners2025;

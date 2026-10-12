import React from 'react';
import { decor2025, peliculasInvitadas2025 } from '../../data/festival2025';
import { FilmCard } from './FilmCard2025';
import SectionHeading from './SectionHeading';

/** Películas invitadas (fuera de competencia), en una sección oscura para alternar el ritmo de la página. */
const GuestFilms2025: React.FC = () => (
  <section
    id="peliculas-invitadas"
    aria-labelledby="invitadas-title"
    className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-edicion25-ciruela to-edicion25-noche py-16 md:py-24"
  >
    <img
      src={decor2025.floresAmarillas1}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="pointer-events-none absolute -right-6 top-6 w-24 opacity-60 sm:w-36 lg:w-44"
    />

    <div className="relative mx-auto max-w-7xl px-6">
      <SectionHeading
        id="invitadas-title"
        eyebrow="Fuera de competencia"
        title="Películas invitadas"
        description="Obras que acompañaron la programación y fortalecieron los espacios de encuentro entre el público y quienes hacen posible el cine."
        tone="dark"
      />

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {peliculasInvitadas2025.map((film) => (
          <li key={film.id}>
            <FilmCard film={film} tone="dark" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default GuestFilms2025;

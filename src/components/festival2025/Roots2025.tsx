import React from 'react';
import { NavLink } from 'react-router-dom';
import { decor2025 } from '../../data/festival2025';

const pill =
  'inline-flex min-h-[44px] items-center rounded-full px-6 py-2.5 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-edicion25-violeta focus-visible:ring-offset-2 focus-visible:ring-offset-edicion25-crema';

/**
 * Cierre de la página: robles amarillo y morado sobre la tierra, que se funde con
 * el footer (mismo tono `subsuelo`). Incluye enlaces a otras ediciones para no
 * dejar la página sin salida.
 */
const Roots2025: React.FC = () => (
  <section aria-label="Cierre de la edición 2025" className="relative isolate overflow-hidden bg-gradient-to-b from-edicion25-crema to-edicion25-mantequilla pt-16 md:pt-24">
    <div className="mx-auto max-w-3xl px-6 text-center">
      <img src={decor2025.colibri} alt="" aria-hidden="true" loading="lazy" className="mx-auto mb-6 h-14 w-auto" />
      <p className="font-serif text-2xl font-semibold italic leading-snug text-edicion25-ciruela md:text-3xl">
        El cine no termina cuando se apagan las luces de la sala: continúa en las conversaciones, en las preguntas y en los vínculos que nacen después de cada proyección.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <NavLink to="/2026" className={`${pill} bg-edicion25-ciruela text-edicion25-crema hover:bg-edicion25-violeta`}>
          Conoce la IV Edición (2026)
        </NavLink>
        <NavLink
          to="/2024"
          className={`${pill} border-2 border-edicion25-violeta text-edicion25-violeta hover:bg-edicion25-violeta hover:text-edicion25-crema`}
        >
          Ver la II Edición (2024)
        </NavLink>
      </div>
    </div>

    {/* Escena: robles sobre la tierra */}
    <div className="relative mt-12 h-40 sm:h-56 lg:h-72">
      <img
        src={decor2025.robleMorado}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute bottom-6 left-[4%] z-10 w-32 sm:bottom-10 sm:w-48 lg:left-[10%] lg:w-64"
      />
      <img
        src={decor2025.robleAmarillo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute bottom-6 right-[4%] z-10 w-32 sm:bottom-10 sm:w-48 lg:right-[10%] lg:w-64"
      />
      <img
        src={decor2025.floresAmarillas2}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute bottom-4 left-1/2 z-10 w-20 -translate-x-1/2 sm:w-28"
      />
      <div className="absolute inset-x-0 bottom-0 z-20 h-16 sm:h-24 lg:h-32">
        <img src={decor2025.tierra} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-edicion25-subsuelo" />
      </div>
    </div>
  </section>
);

export default Roots2025;

import React from 'react';
import { MapPin } from 'lucide-react';
import { decor2025, festivalDates2025 } from '../../data/festival2025';

const anchorBase =
  'inline-flex min-h-[44px] items-center rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-edicion25-violeta focus-visible:ring-offset-2 focus-visible:ring-offset-edicion25-crema';

/**
 * Hero de /2025: reproduce la composición del poster oficial (cielo amarillo con
 * resplandor, árbol principal con raíces y robles morado/amarillo a los lados).
 *
 * El `padding-top` deja libre la altura del header fijo (~112 px en móvil y
 * ~128 px en escritorio) más un respiro, para que el título nunca quede debajo.
 */
const Hero2025: React.FC = () => (
  <header className="relative isolate overflow-hidden bg-gradient-to-b from-edicion25-mantequilla via-edicion25-crema to-edicion25-crema pb-24 pt-36 sm:pb-32 md:pt-44 lg:pb-44">
    {/* Cielo: resplandor y nubes */}
    <img
      src={decor2025.resplandor}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-24 -z-10 w-[150%] max-w-none -translate-x-1/2 opacity-60 sm:w-[110%] lg:left-[72%] lg:top-8 lg:w-[75%]"
    />
    <img
      src={decor2025.nubes}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-28 -z-10 w-2/3 max-w-none opacity-40"
    />

    <div className="mx-auto grid max-w-7xl items-center gap-4 px-6 lg:grid-cols-2 lg:gap-10">
      <div className="text-center lg:pb-16 lg:text-left">
        <span className="inline-block rounded-full bg-edicion25-violeta/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-edicion25-violeta">
          Edición anterior · III Edición
        </span>

        <h1 className="mt-6">
          <img
            src={decor2025.titulo}
            alt="III Festival Internacional de Cine Diverso"
            width={811}
            height={337}
            className="mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-lg"
          />
        </h1>

        <p className="mt-4 font-serif text-3xl font-semibold italic text-edicion25-cobre sm:text-4xl">
          Historias que nos habitan
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <img
            src={decor2025.fechas}
            alt={`Del 21 al 25 de octubre de ${festivalDates2025.year}`}
            width={578}
            height={506}
            className="h-24 w-auto sm:h-28"
          />
          <span className="inline-flex items-center gap-2 rounded-full bg-edicion25-violeta px-5 py-2.5 text-sm font-bold text-edicion25-crema shadow-md sm:text-base">
            <MapPin className="h-5 w-5 text-edicion25-sol" aria-hidden="true" />
            {festivalDates2025.location}
          </span>
        </div>

        <nav aria-label="Secciones de la edición" className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a href="#ganadores" className={`${anchorBase} bg-edicion25-ciruela text-edicion25-crema hover:bg-edicion25-violeta`}>
            Ganadores
          </a>
          <a
            href="#seleccion-oficial"
            className={`${anchorBase} border-2 border-edicion25-violeta text-edicion25-violeta hover:bg-edicion25-violeta hover:text-edicion25-crema`}
          >
            Selección oficial
          </a>
          <a
            href="#peliculas-invitadas"
            className={`${anchorBase} border-2 border-edicion25-violeta text-edicion25-violeta hover:bg-edicion25-violeta hover:text-edicion25-crema`}
          >
            Películas invitadas
          </a>
        </nav>
      </div>

      {/* Árbol principal flanqueado por los robles, como en el poster. Se hunde unos px en la tierra
          para que las raíces "salgan" del suelo. Los robles quedan en esta columna (no en la de
          texto) para no tapar el título ni los botones. */}
      <div className="relative z-10 -mb-10 sm:-mb-14 lg:-mb-24">
        <img
          src={decor2025.robleMorado}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 bottom-4 w-24 sm:-left-2 sm:w-36 lg:bottom-5 lg:-left-6 lg:w-40 xl:w-48"
        />
        <img
          src={decor2025.robleAmarillo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 bottom-4 w-24 sm:-right-2 sm:w-36 lg:bottom-5 lg:-right-6 lg:w-40 xl:w-48"
        />
        <img
          src={decor2025.arbolPrincipal}
          alt=""
          aria-hidden="true"
          width={1200}
          height={1395}
          className="relative mx-auto w-full max-w-[16rem] sm:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>
    </div>

    {/* Suelo: se funde con el color de inicio de la sección siguiente */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 sm:h-28 lg:h-40">
      <img src={decor2025.tierra} alt="" aria-hidden="true" className="h-full w-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-edicion25-noche" />
    </div>
  </header>
);

export default Hero2025;

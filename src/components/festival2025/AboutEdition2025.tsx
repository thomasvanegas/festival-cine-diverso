import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import {
  decor2025,
  festivalDates2025,
  festivalDescription2025,
  festivalStats2025,
  posterImage2025,
  seleccionOficial2025,
} from '../../data/festival2025';

const infoCard =
  'rounded-3xl border border-edicion25-lila/25 bg-white/5 p-6 backdrop-blur-sm md:p-8';

/**
 * "Sobre esta edición": poster oficial + reseña, fechas, ubicación y cifras.
 * Sección oscura (la "tierra" del poster) con textos crema/amarillo.
 */
const AboutEdition2025: React.FC = () => {
  const [lead, ...rest] = festivalDescription2025;

  const stats = [
    { value: festivalStats2025.inscritos, label: 'cortometrajes inscritos' },
    { value: String(seleccionOficial2025.length), label: 'obras en la selección oficial' },
    { value: festivalStats2025.paises, label: 'países de origen' },
  ];

  return (
    <section
      id="sobre-la-edicion"
      aria-labelledby="sobre-edicion-title"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-edicion25-noche to-edicion25-ciruela py-16 text-edicion25-crema md:py-24"
    >
      <img
        src={decor2025.floresAmarillas2}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-6 top-8 w-28 opacity-70 sm:w-40 lg:w-52"
      />
      <img
        src={decor2025.floresMoradas}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -left-8 bottom-6 w-28 opacity-50 sm:w-40 lg:w-52"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Poster oficial */}
          <div className="flex justify-center lg:col-span-2">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-edicion25-rosa/40 via-edicion25-sol/30 to-edicion25-violeta/50" />
              <img
                src={posterImage2025.src}
                alt="Poster oficial del III Festival Internacional de Cine Diverso 2025: Historias que nos habitan"
                width={1000}
                height={Math.round(1000 / posterImage2025.ratio)}
                loading="lazy"
                className="relative w-full -rotate-2 rounded-3xl shadow-2xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-0"
              />
            </div>
          </div>

          {/* Reseña */}
          <div className="lg:col-span-3">
            <span className="mb-4 inline-block rounded-full bg-edicion25-sol/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-edicion25-sol">
              Sobre esta edición
            </span>
            <h2 id="sobre-edicion-title" className="mb-4 font-futura text-3xl font-black text-edicion25-crema md:text-4xl">
              La Tercera Edición
            </h2>
            <img
              src={decor2025.subtitulo}
              alt="Historias que nos habitan"
              width={900}
              height={237}
              loading="lazy"
              className="mb-6 w-60 max-w-full sm:w-72"
            />
            <div className="space-y-4 leading-relaxed text-edicion25-mantequilla/90">
              <p className="text-lg text-edicion25-crema">{lead}</p>
              {rest.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Fechas y ubicación */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className={infoCard}>
            <Calendar className="mb-4 h-10 w-10 text-edicion25-sol" aria-hidden="true" />
            <h3 className="mb-2 font-futura text-xl font-bold text-edicion25-crema">Fechas del Festival</h3>
            <p className="text-3xl font-black text-edicion25-sol">{festivalDates2025.rangeLabel}</p>
            <p className="font-semibold text-edicion25-mantequilla/80">{festivalDates2025.year}</p>
          </div>
          <div className={infoCard}>
            <MapPin className="mb-4 h-10 w-10 text-edicion25-rosa" aria-hidden="true" />
            <h3 className="mb-2 font-futura text-xl font-bold text-edicion25-crema">Ubicación</h3>
            <p className="text-3xl font-black text-edicion25-rosa">Barranquilla</p>
            <p className="font-semibold text-edicion25-mantequilla/80">Colombia</p>
          </div>
        </div>

        {/* Cifras */}
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse rounded-2xl bg-gradient-to-br from-edicion25-violeta to-edicion25-iris p-6 text-center shadow-lg"
            >
              <dt className="mt-1 text-sm font-medium text-edicion25-crema/90">{stat.label}</dt>
              <dd className="font-futura text-4xl font-black text-edicion25-sol md:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutEdition2025;

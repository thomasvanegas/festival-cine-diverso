import React, { useEffect, useState } from 'react';
import { Calendar, Award, Film, ChevronDown, Lock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import YearBadges from './YearBadges';
import VideoSection from './VideoSection';
import SponsorsSection from './SponsorsSection';
import FestivalInfo from './FestivalInfo';
import Gallery from './Gallery';
import FilmModal from './ui/FilmModal';

import { seleccionOficial2025 } from '../data/seleccionOficial2025';
import { programacion2025 } from '../data/programacion2025';
import { homeGalleryImages } from '../data/gallery';
import { getCoverSrc } from '../utils/getCoverSrc';
import { normalizeFilm } from '../utils/normalizeFilm';
import type { Film as FilmType } from '../types';

/**
 * Página principal (Home) del Festival Internacional de Cine Diverso.
 *
 * Renderiza:
 * - Hero con elementos decorativos (árboles, flores, fondo)
 * - Badges de ediciones anteriores (YearBadges)
 * - Sección de video / Spotify (VideoSection)
 * - Información general del festival (FestivalInfo)
 * - Calendario 2025 con programación desplegable
 * - Selección Oficial 2025 con modal de detalle
 * - Galería de imágenes y patrocinadores
 */
const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  /** Película seleccionada para mostrar en el modal de detalle */
  const [selectedFilm, setSelectedFilm] = useState<FilmType | null>(null);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/Fondo.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Resplandor BG overlay */}
        <img
          src="/Resplandor BG.png"
          alt="Glow Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
        />

        {/* Trees and Ground */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none -z-10">
          <img src="/Tierra MG.png" alt="Ground" className="w-full" />
        </div>
        <div className="absolute bottom-0 left-10 w-64 pointer-events-none -z-10">
          <img src="/Roble amarillo.png" alt="Yellow Oak Tree" />
        </div>
        <div className="absolute bottom-0 right-10 w-64 pointer-events-none -z-10">
          <img src="/Roble morado.png" alt="Purple Oak Tree" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 pointer-events-none -z-10">
          <img src="/Árbol principal.png" alt="Main Tree" />
        </div>

        {/* Flowers */}
        <div className="absolute bottom-10 left-20 w-24 pointer-events-none -z-10">
          <img src="/Flores Amarillas 1.png" alt="Yellow Flowers 1" />
        </div>
        <div className="absolute bottom-10 right-20 w-24 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1" />
        </div>
        <div className="absolute bottom-5 left-1/3 w-20 pointer-events-none -z-10">
          <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 2" />
        </div>
        <div className="absolute top-24 left-10 w-16 pointer-events-none -z-10">
          <img src="/Flores Amarillas 1.png" alt="Yellow Flowers 1 Top" />
        </div>
        <div className="absolute top-32 right-10 w-16 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1 Top" />
        </div>
        <div className="absolute top-1/2 left-5 w-12 pointer-events-none -z-10">
          <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 2 Side" />
        </div>
        <div className="absolute top-1/2 right-5 w-12 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1 Side" />
        </div>
        <div className="absolute top-10 left-1/4 w-10 pointer-events-none -z-10">
          <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 2 TopLeft" />
        </div>
        <div className="absolute top-10 right-1/4 w-10 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1 TopRight" />
        </div>
        <div className="absolute bottom-24 left-1/6 w-16 pointer-events-none -z-10">
          <img src="/Flores Amarillas 1.png" alt="Yellow Flowers 1 BottomLeft" />
        </div>
        <div className="absolute bottom-24 right-1/6 w-16 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1 BottomRight" />
        </div>
        <div className="absolute top-1/3 left-1/2 w-12 pointer-events-none -z-10">
          <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 2 CenterTop" />
        </div>
        <div className="absolute bottom-1/3 right-1/2 w-12 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1 CenterBottom" />
        </div>
        <div className="absolute top-1/4 right-1/3 w-14 pointer-events-none -z-10">
          <img src="/Flores Amarillas 1.png" alt="Yellow Flowers 1 TopRightQuarter" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-14 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1 BottomLeftQuarter" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center max-w-6xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="mb-12 flex flex-col items-center">
            <div className="flex flex-col justify-center items-center gap-6 w-full">
              <img src="/Título.png" alt="Festival Title" className="max-w-full w-96" />
              <img src="/Subtítulo.png" alt="Festival Subtitle" className="max-w-full w-72" />
            </div>
            <img src="/Fechas.png" alt="Festival Dates" className="mx-auto max-w-full w-32 mt-6" />
          </div>

          {/* Call to Action */}
          <div data-aos="fade-up" data-aos-delay="600" className="bg-purple-800/40 backdrop-blur-md rounded-3xl p-8 mb-8 border border-purple-900 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">
              SELECCION OFICIAL!
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#seleccion2025"
                className="bg-purple-900 text-yellow-400 px-8 py-4 rounded-full font-black text-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-2 min-w-[200px] justify-center"
                title="Ir a Selección Oficial"
              >
                <span>Ver seleccion</span>
                <Lock className="w-5 h-5 text-yellow-400" />
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <p className="text-white text-sm font-bold mb-2">
              Cortometrajes de 4-30 minutos • Ficción y No Ficción • Nacional e Internacional
            </p>
          </div>
        </div>
      </div>

      <YearBadges />
      <VideoSection />
      <FestivalInfo />

      {/* Calendario 2025 en Home */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Calendario 2025</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Despliega cada día para ver detalles de obras y sesiones
        </p>

        <div className="space-y-6">
          {programacion2025.map((dia, i) => (
            <details key={i} className="group border border-gray-200 rounded-2xl bg-white">
              <summary className="flex items-start justify-between gap-4 cursor-pointer p-6 list-none">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">{dia.nombre}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-1 text-purple-600" />
                    {dia.fechaLugarHora}
                  </p>
                  {dia.tema && (
                    <p className="text-sm text-gray-800 mt-1">{dia.tema}</p>
                  )}
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-6 pb-6">
                {dia.descripcion && (
                  <p className="text-sm text-gray-700 mb-3">{dia.descripcion}</p>
                )}

                {dia.especial && (
                  <div className="mt-2 bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <p className="text-pink-700 font-semibold">{dia.especial}</p>
                  </div>
                )}

                {/* Sesiones (si existen) */}
                {dia.sesiones && dia.sesiones.length > 0 ? (
                  <div className="mt-6 space-y-8">
                    {dia.sesiones.map((sesion, si) => (
                      <div key={si}>
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">{sesion.titulo}</h4>
                          {sesion.detalle && (
                            <p className="text-sm text-gray-600">{sesion.detalle}</p>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                          {(sesion.items ?? []).map((item, ii) => (
                            <div key={ii} className={`rounded-lg p-4 transition-colors ring-1 ${ii % 2 === 0 ? 'bg-rose-50 hover:bg-rose-100 ring-rose-100' : 'bg-sky-50 hover:bg-sky-100 ring-sky-100'}`}>
                              <p className="font-semibold text-gray-800 line-clamp-1">{item.titulo}</p>
                              <p className="text-sm text-gray-600 line-clamp-1">{item.pais} — {item.director}</p>
                              {item.duracion && (
                                <p className="text-xs text-gray-500 mt-1">{item.duracion}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {(dia.items ?? []).map((item, ii) => (
                      <div key={ii} className={`rounded-lg p-4 transition-colors ring-1 ${ii % 2 === 0 ? 'bg-rose-50 hover:bg-rose-100 ring-rose-100' : 'bg-sky-50 hover:bg-sky-100 ring-sky-100'}`}>
                        <p className="font-semibold text-gray-800 line-clamp-1">{item.titulo}</p>
                        <p className="text-sm text-gray-600 line-clamp-1">{item.pais} — {item.director}</p>
                        {item.duracion && (
                          <p className="text-xs text-gray-500 mt-1">{item.duracion}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Selección Oficial 2025 en Home */}
      <div id="seleccion2025" className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Selección Oficial 2025</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Obras seleccionadas que exploran la diversidad, la memoria y el afecto
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {seleccionOficial2025.map((film, index) => {
              const normalized = normalizeFilm(film);
              const coverSrc = getCoverSrc(normalized.enlace);
              return (
                <div key={index} className="group relative">
                  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white flex flex-col max-h-none overflow-hidden">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 z-10">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    {coverSrc ? (
                      <div className="aspect-[16/27] rounded-lg mb-4 overflow-hidden bg-gray-100">
                        <img src={coverSrc} alt={`Portada ${normalized.titulo}`} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="aspect-[16/27] bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                        <Film className="w-12 h-12 text-gray-600" />
                      </div>
                    )}
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg text-gray-800 line-clamp-2">
                        {normalized.titulo} <span className="text-gray-500 font-medium">— {normalized.anio}</span>
                      </h4>
                      {normalized.director && (
                        <p className="text-sm text-gray-600 line-clamp-1">por: {normalized.director}</p>
                      )}
                      {normalized.sinopsis && (
                        <p className="text-sm text-gray-700 line-clamp-4">{normalized.sinopsis}</p>
                      )}
                    </div>
                    <div className="mt-4 mt-auto flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setSelectedFilm(normalized)}
                        className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
                      >
                        Ver más
                        <Film className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />

      <SponsorsSection />
      <Gallery images={homeGalleryImages} title="Galería Festival Diverso" />
    </>
  );
};

export default Home;

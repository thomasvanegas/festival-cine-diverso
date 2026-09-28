import React from 'react';
import { Award, Film, Calendar, MapPin, Heart } from 'lucide-react';
import {
  selectedFilms2024,
  galleryImages2024,
  posterImage2024,
  festivalDates2024,
  festivalDescription2024,
} from '../data/festival2024';

const Festival2024 = () => {
  const galleryImages = galleryImages2024;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 animate-fade-in relative overflow-hidden">
      {/* Overlays y decoraciones */}
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-200 rounded-full blur-xl animate-pulse delay-700"></div>
        {/* Confeti */}
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        {/* Mariposa */}
        <img src="/Flores Amarillas 1.png" alt="Mariposa" className="absolute top-16 left-1/2 w-10 animate-float-slow" />
        {/* Destellos */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white rounded-full blur-2xl opacity-40 animate-pulse"></div>
      </div>
      {/* Árboles y flores */}
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
      {/* Flores extra */}
      <div className="absolute bottom-10 left-20 w-24 pointer-events-none -z-10">
        <img src="/Flores Amarillas 1.png" alt="Yellow Flowers 1" />
      </div>
      <div className="absolute bottom-10 right-20 w-24 pointer-events-none -z-10">
        <img src="/Flores Moradas 1.png" alt="Purple Flowers 1" />
      </div>
      <div className="absolute bottom-5 left-1/3 w-20 pointer-events-none -z-10">
        <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 2" />
      </div>
      {/* Hero Content con fondo especial y decoraciones ÚNICAS para 2024 */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 pt-40 md:pt-48 pb-16 text-center max-w-6xl mx-auto animate-fade-in-up overflow-hidden rounded-b-3xl "
        style={{
          background: 'radial-gradient(circle at 60% 40%, #f9e7ff 60%, #c6f7e7 100%), linear-gradient(120deg, #f9e7ff 0%, #c6f7e7 100%)',
        }}
      >
        {/* Hero textual (sin decoraciones florales: no forman parte de la identidad 2024) */}
        <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-lg">
          <span className="text-sm font-bold text-[#0033FF] tracking-widest">EDICIÓN ANTERIOR</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg text-[#0033FF] animate-fade-in-up">II FESTIVAL INTERNACIONAL</h1>
        <h2 className="text-3xl md:text-5xl font-black text-[#FF3300] mb-4 animate-fade-in-up delay-100">DE CINE DIVERSO 2024</h2>
        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6 animate-fade-in-up delay-200">Celebrando la diversidad audiovisual</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 animate-fade-in-up delay-300">
          <span className="bg-[#0033FF]/10 text-[#0033FF] font-bold px-6 py-2 rounded-full shadow-md text-lg">{festivalDates2024.rangeLabel} {festivalDates2024.year}</span>
          <span className="bg-[#FF3300]/10 text-[#FF3300] font-bold px-6 py-2 rounded-full shadow-md text-lg">{festivalDates2024.location}</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Sobre esta Edición: poster oficial + reseña */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16 items-center animate-fade-in-up">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#0033FF]/20 via-[#FFCC00]/20 to-[#FF3300]/20 rounded-[2rem] rotate-3" />
              <img
                src={posterImage2024}
                alt="Poster oficial II Festival Internacional de Cine Diverso 2024"
                className="relative rounded-3xl shadow-2xl w-full object-cover -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-bold tracking-widest text-[#0033FF] bg-[#0033FF]/10 px-4 py-1.5 rounded-full mb-4 uppercase">
              Sobre esta edición
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">La Segunda Edición</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {festivalDescription2024.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Festival Dates and Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Calendar className="w-12 h-12 text-[#0033FF] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fechas del Festival</h3>
            <p className="text-[#0033FF] font-bold text-3xl mb-1">{festivalDates2024.rangeLabel}</p>
            <p className="text-gray-500 font-semibold">{festivalDates2024.year}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <MapPin className="w-12 h-12 text-[#FF3300] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h3>
            <p className="text-[#FF3300] font-bold text-3xl mb-2">Barranquilla</p>
            <p className="text-gray-500 mt-4">Colombia</p>
          </div>
        </div>

        {/* Winners Section - More Prominent */}
        <div className="bg-gradient-to-r from-[#0033FF] via-[#FFCC00] to-[#FF3300] rounded-3xl p-12 text-white text-center mb-16 relative overflow-hidden animate-fade-in-up delay-200">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">GANADORES 2024</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Cortometrajes premiados con la estatuilla del colibrí, símbolo de libertad, resistencia y belleza
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="font-bold text-lg mb-2">Ficción Nacional</h3>
                <p className="text-yellow-50 font-semibold">"Petricor"</p>
                <p className="text-sm text-white/80">Juan José Arias Gil</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="font-bold text-lg mb-2">Ficción Internacional</h3>
                <p className="text-yellow-50 font-semibold">"Exento"</p>
                <p className="text-sm text-white/80">Otto Morales</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="font-bold text-lg mb-2">No Ficción Nacional</h3>
                <p className="text-yellow-50 font-semibold">"Degenere"</p>
                <p className="text-sm text-white/80">Sara Asprilla</p>
              </div>
            </div>
          </div>
        </div>

        {/* Festival Highlights */}
        <div className="mb-16 animate-fade-in-up delay-300">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
            Momentos Destacados del Festival
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="rounded-lg object-cover w-full h-80"
              />
            ))}
          </div>
        </div>

        {/* Selected Films Gallery */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 animate-fade-in-up delay-400">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Selección Oficial 2024</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Una cuidadosa selección de cortometrajes que representan la diversidad y calidad del cine LGBTIQ+ contemporáneo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedFilms2024.map((film, index) => (
              <div key={index} className="group relative">
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  {film.winner && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FF3300] to-[#FF6600] rounded-full p-2 z-10">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className="h-72 bg-gradient-to-br from-[#0033FF]/10 to-[#FF3300]/10 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    {film.image ? (
                      <img
                        src={film.image}
                        alt={`Poster de ${film.title}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <Film className="w-12 h-12 text-gray-600" />
                    )}
                  </div>

                  <h3 className="font-bold text-lg text-gray-800 mb-2">{film.title}</h3>
                  {film.director && <p className="text-gray-600 mb-1">Dir. {film.director}</p>}
                  {(film.country || film.duration) && (
                    <p className="text-gray-500 text-sm mb-3">{film.country} {film.duration}</p>
                  )}
                  {film.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{film.description}</p>
                  )}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#00CCFF]/10 text-[#00708c]">
                    Cortometraje
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Festival Impact */}
        <div className="bg-gradient-to-br from-[#0033FF] to-[#FF6600] rounded-3xl p-8 md:p-12 text-white animate-fade-in-up delay-500">
          <div className="flex items-center gap-4 mb-8">
            <Heart className="w-12 h-12 flex-shrink-0" />
            <h3 className="text-2xl md:text-3xl font-bold">Impacto del Festival 2024</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">45</p>
              <p className="text-sm text-white/80">Cortometrajes proyectados</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">15</p>
              <p className="text-sm text-white/80">Países participantes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">8</p>
              <p className="text-sm text-white/80">Sedes de proyección</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">25</p>
              <p className="text-sm text-white/80">Actividades académicas</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-black mb-1">2,500+</p>
              <p className="text-sm text-white/80">Asistentes totales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival2024;

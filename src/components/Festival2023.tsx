import React from 'react';
import { Award, Film, Calendar, MapPin, Heart } from 'lucide-react';
import {
  selectedFilms2023,
  galleryImages2023,
  posterImage2023,
  festivalDates2023,
  festivalDescription2023,
} from '../data/festival2023';

const Festival2023 = () => {
  const galleryImages = galleryImages2023;
  const winningFilms2023 = selectedFilms2023.filter((film) => film.winner);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in relative overflow-hidden">
      {/* Hero Content con fondo especial y decoraciones ÚNICAS para 2023 */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 pt-40 md:pt-48 pb-16 text-center max-w-6xl mx-auto animate-fade-in-up overflow-hidden rounded-b-3xl"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #fffbe7 60%, #f7e7c6 100%), linear-gradient(120deg, #fffbe7 0%, #f7e7c6 100%)',
        }}
      >
        {/* Hero textual (sin decoraciones florales: no forman parte de la identidad 2023) */}
        <div className="inline-block bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-lg">
          <span className="text-sm font-bold text-[#E5331A] tracking-widest">PRIMERA EDICIÓN</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg text-[#954695] animate-fade-in-up">I FESTIVAL INTERNACIONAL</h1>
        <h2 className="text-3xl md:text-5xl font-black text-[#E5331A] mb-4 animate-fade-in-up delay-100">DE CINE DIVERSO 2023</h2>
        <p className="text-gray-700 font-semibold tracking-wide animate-fade-in-up delay-100">
          {festivalDates2023.rangeLabel} de {festivalDates2023.year} · {festivalDates2023.location}
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Sobre esta Edición: poster oficial + reseña */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16 items-center animate-fade-in-up">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#E5331A]/20 via-[#F6A61C]/20 to-[#954695]/20 rounded-[2rem] rotate-3" />
              <img
                src={posterImage2023}
                alt="Poster oficial I Festival Internacional de Cine Diverso 2023"
                className="relative rounded-3xl shadow-2xl w-full object-cover -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-bold tracking-widest text-[#E5331A] bg-[#E5331A]/10 px-4 py-1.5 rounded-full mb-4 uppercase">
              Sobre esta edición
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">La Primera Edición</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {festivalDescription2023.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Festival Dates and Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Calendar className="w-12 h-12 text-[#E5331A] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fechas del Festival</h3>
            <p className="text-[#E5331A] font-bold text-3xl mb-1">{festivalDates2023.rangeLabel}</p>
            <p className="text-gray-500 font-semibold">{festivalDates2023.year}</p>
            <p className="text-gray-500 mt-4">Evento realizado en Barranquilla</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <MapPin className="w-12 h-12 text-[#1AB6BA] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h3>
            <p className="text-[#1AB6BA] font-bold text-3xl mb-2">Barranquilla</p>
            <p className="text-gray-500 mt-4">Colombia</p>
          </div>
        </div>

        {/* Winners Section - Inaugural Edition */}
        <div className="bg-gradient-to-r from-[#E5331A] via-[#F6A61C] to-[#954695] rounded-3xl p-12 text-white text-center mb-16 relative overflow-hidden animate-fade-in-up delay-200">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">CORTOMETRAJES GANADORES 2023</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Los pioneros que recibieron la primera estatuilla del colibrí, inaugurando una tradición de reconocimiento al cine diverso
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {winningFilms2023.map((film) => (
                <div
                  key={film.title}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <h3 className="font-bold text-lg mb-2">Cortometraje Ganador</h3>
                  <p className="text-yellow-50 font-semibold">"{film.title}"</p>
                  <p className="text-sm text-white/80">{film.director}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Festival Highlights */}
        <div className="mb-16 animate-fade-in-up delay-300">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
            Momentos Históricos del Festival Inaugural
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Selección Oficial 2023</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            La primera selección que marcó el inicio de una tradición cinematográfica inclusiva en el Caribe colombiano
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedFilms2023.map((film, index) => (
              <div key={index} className="group relative">
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  {film.winner && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#E5331A] to-[#F6A61C] rounded-full p-2 z-10">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className="h-72 bg-gradient-to-br from-[#1AB6BA]/10 to-[#954695]/10 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
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
                  <p className="text-gray-600 mb-1">Dir. {film.director}</p>
                  {(film.country || film.duration) && (
                    <p className="text-gray-500 text-sm mb-3">{film.country} {film.duration}</p>
                  )}

                  {film.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{film.description}</p>
                  )}

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#1AB6BA]/10 text-[#106D70]">
                    {film.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Festival Legacy */}
        <div className="bg-gradient-to-br from-[#954695] to-[#1AB6BA] rounded-3xl p-8 md:p-12 text-white animate-fade-in-up delay-500">
          <div className="flex items-center gap-4 mb-8">
            <Heart className="w-12 h-12 flex-shrink-0" />
            <h3 className="text-2xl md:text-3xl font-bold">Legado del Festival Inaugural</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">32</p>
              <p className="text-sm text-white/80">Cortometrajes proyectados</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">12</p>
              <p className="text-sm text-white/80">Países participantes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">5</p>
              <p className="text-sm text-white/80">Sedes de proyección</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-1">15</p>
              <p className="text-sm text-white/80">Actividades culturales</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-black mb-1">1,200+</p>
              <p className="text-sm text-white/80">Asistentes totales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival2023;

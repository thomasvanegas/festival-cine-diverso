import React from 'react';
import { Award, Film, Calendar, MapPin, Trophy, Heart, Play, Sparkles } from 'lucide-react';
import { selectedFilms2023, galleryImages2023 } from '../data/festival2023';
import BackgroundDecoration from './ui/BackgroundDecoration';

const Festival2023 = () => {
  const galleryImages = galleryImages2023;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in relative overflow-hidden">
      {/* Hero Content con fondo especial y decoraciones ÚNICAS para 2023 */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 pt-24 text-center max-w-6xl mx-auto animate-fade-in-up overflow-hidden rounded-b-3xl"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #fffbe7 60%, #f7e7c6 100%), linear-gradient(120deg, #fffbe7 0%, #f7e7c6 100%)',
        }}
      >
        <BackgroundDecoration variant="blue" />
        {/* Estrellas */}
        <img src="/Flores Amarillas 1.png" alt="Estrella" className="absolute top-16 left-1/2 w-10 animate-float-slow pointer-events-none -z-10" />
        {/* Flores amarillas */}
        <div className="absolute bottom-10 left-20 w-24 pointer-events-none -z-10">
          <img src="/Flores Amarillas 1.png" alt="Yellow Flowers 1" />
        </div>
        <div className="absolute bottom-10 right-20 w-24 pointer-events-none -z-10">
          <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 2" />
        </div>
        <div className="absolute bottom-5 left-1/3 w-20 pointer-events-none -z-10">
          <img src="/Flores Amarillas 2.png" alt="Yellow Flowers 3" />
        </div>
        {/* Hero textual */}
        <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-lg">
          <span className="text-sm font-bold text-yellow-700 tracking-widest">PRIMERA EDICIÓN</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg text-yellow-900 animate-fade-in-up">I FESTIVAL INTERNACIONAL</h1>
        <h2 className="text-3xl md:text-5xl font-black text-pink-400 mb-4 animate-fade-in-up delay-100">DE CINE DIVERSO 2023</h2>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Festival Dates and Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Calendar className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fechas del Festival</h3>
            <p className="text-blue-600 font-bold text-3xl mb-2">2023</p>
            <p className="text-gray-500 mt-4">Evento realizado en Barranquilla</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <MapPin className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h3>
            <p className="text-indigo-600 font-bold text-3xl mb-2">Barranquilla</p>
            <p className="text-gray-500 mt-4"></p>
          </div>
        </div>

        {/* Winners Section - Inaugural Edition */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl p-12 text-white text-center mb-16 relative overflow-hidden animate-fade-in-up delay-200">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300/30 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Sparkles className="w-16 h-16" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">CORTOMETRAJES GANADORES 2023</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Los pioneros que recibieron la primera estatuilla del colibrí, inaugurando una tradición de reconocimiento al cine diverso
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <Trophy className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Cortometraje Ganador</h3>
                <p className="text-yellow-100 font-semibold">"Aipá'a Yem"</p>
                <p className="text-sm text-yellow-200">Luzbeidy Monterrosa</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <Trophy className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Cortometraje Ganador</h3>
                <p className="text-yellow-100 font-semibold">"Yigayo Yuwuerane"</p>
                <p className="text-sm text-yellow-200">Ross Dayana López</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <Trophy className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Cortometraje Ganador</h3>
                <p className="text-yellow-100 font-semibold">"La Poderosa"</p>
                <p className="text-sm text-yellow-200">Mavis de la Ossa</p>
              </div>
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
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 z-10">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <Film className="w-12 h-12 text-gray-600" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{film.title}</h3>
                  <p className="text-gray-600 mb-1">Dir. {film.director}</p>
                  <p className="text-gray-500 text-sm mb-3">{film.country} {film.duration}</p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{film.description}</p>
                  
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    film.category.includes('Nacional') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {film.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Festival Legacy */}
        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up delay-500">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
            <Heart className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-6">Legado del Festival Inaugural</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span>Cortometrajes proyectados</span>
                <span className="text-2xl font-bold">32</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Países participantes</span>
                <span className="text-2xl font-bold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sedes de proyección</span>
                <span className="text-2xl font-bold">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Actividades culturales</span>
                <span className="text-2xl font-bold">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Asistentes totales</span>
                <span className="text-2xl font-bold">1,200+</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">El Comienzo de una Tradición</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Primer Festival LGBTIQ+</h4>
                  <p className="text-gray-600 text-sm">Primera plataforma dedicada al cine diverso en el Caribe colombiano</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Reconocimiento Regional</h4>
                  <p className="text-gray-600 text-sm">Cobertura en medios nacionales y reconocimiento institucional</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Base para el Futuro</h4>
                  <p className="text-gray-600 text-sm">Establecimiento de las bases para las siguientes ediciones</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Comunidad Creada</h4>
                  <p className="text-gray-600 text-sm">Formación de una red de cineastas y activistas LGBTIQ+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival2023;

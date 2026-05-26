import React from 'react';
import { Award, Film, Calendar, MapPin, Trophy, Heart, Play } from 'lucide-react';
import { selectedFilms2024, galleryImages2024 } from '../data/festival2024';
import BackgroundDecoration from './ui/BackgroundDecoration';

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
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 pt-24 text-center max-w-6xl mx-auto animate-fade-in-up overflow-hidden rounded-b-3xl "
        style={{
          background: 'radial-gradient(circle at 60% 40%, #f9e7ff 60%, #c6f7e7 100%), linear-gradient(120deg, #f9e7ff 0%, #c6f7e7 100%)',
        }}
      >
        <BackgroundDecoration variant="green" />
        {/* Mariposa usando una flor como base visual */}
        <img src="/Flores Moradas 1.png" alt="Mariposa" className="absolute top-16 left-1/2 w-10 animate-float-slow pointer-events-none -z-10" />
        {/* Flores moradas y verdes */}
        <div className="absolute bottom-10 left-20 w-24 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1" />
        </div>
        <div className="absolute bottom-10 right-20 w-24 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 1b" />
        </div>
        <div className="absolute bottom-5 left-1/3 w-20 pointer-events-none -z-10">
          <img src="/Flores Moradas 1.png" alt="Purple Flowers 2" />
        </div>
        {/* Hero textual */}
        <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-lg">
          <span className="text-sm font-bold text-purple-700 tracking-widest">EDICIÓN ANTERIOR</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg text-purple-900 animate-fade-in-up">II FESTIVAL INTERNACIONAL</h1>
        <h2 className="text-3xl md:text-5xl font-black text-green-400 mb-4 animate-fade-in-up delay-100">DE CINE DIVERSO 2024</h2>
        <p className="text-xl md:text-2xl font-medium text-pink-700 mb-6 animate-fade-in-up delay-200">Celebrando la diversidad audiovisual</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 animate-fade-in-up delay-300">
          <span className="bg-green-200/80 text-green-900 font-bold px-6 py-2 rounded-full shadow-md text-lg">22 - 26 Octubre 2024</span>
          <span className="bg-purple-200/80 text-purple-900 font-bold px-6 py-2 rounded-full shadow-md text-lg">Barranquilla, Colombia</span>
        </div>
      </header>
      {/* El resto del contenido permanece igual */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Festival Dates and Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Calendar className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fechas del Festival</h3>
      <p className="text-pink-600 font-bold text-3xl mb-2">2024</p>
      <p className="text-gray-600 text-lg">Evento realizado en Barranquilla</p>
       </div>
    
    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <MapPin className="w-12 h-12 text-purple-600 mb-4" />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h3>
      <p className="text-purple-600 font-bold text-3xl mb-2">Barranquilla</p>
    </div>
  </div>

  {/* Winners Section - More Prominent */}
  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-12 text-white text-center mb-16 relative overflow-hidden animate-fade-in-up delay-200">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300/30 to-transparent"></div>
    </div>
    
    <div className="relative z-10">
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
          <Award className="w-16 h-16" />
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl font-black mb-6">GANADORES 2024</h2>
      <p className="text-xl mb-12 max-w-3xl mx-auto">
        Cortometrajes premiados con la estatuilla del colibrí, símbolo de libertad, resistencia y belleza
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
          <Trophy className="w-8 h-8 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Ficción Nacional</h3>
          <p className="text-yellow-100 font-semibold">"Petricor"</p>
          <p className="text-sm text-yellow-200">Juan José Arias Gil</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
          <Trophy className="w-8 h-8 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Ficción Internacional</h3>
          <p className="text-yellow-100 font-semibold">"Exento"</p>
          <p className="text-sm text-yellow-200">Otto Morales</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
          <Trophy className="w-8 h-8 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">No Ficción Nacional</h3>
          <p className="text-yellow-100 font-semibold">"Degenere"</p>
          <p className="text-sm text-yellow-200">Sara Asprilla</p>
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
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 z-10">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
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
                  Cortometraje
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Festival Impact */}
        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up delay-500">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
            <Heart className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-6">Impacto del Festival 2024</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span>Cortometrajes proyectados</span>
                <span className="text-2xl font-bold">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Países participantes</span>
                <span className="text-2xl font-bold">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sedes de proyección</span>
                <span className="text-2xl font-bold">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Actividades académicas</span>
                <span className="text-2xl font-bold">25</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Asistentes totales</span>
                <span className="text-2xl font-bold">2,500+</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Legado y Proyección</h3>
            <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Formación de Audiencias</h4>
                <p className="text-gray-600 text-sm">El festival fortaleció la sensibilidad crítica de nuevos públicos, especialmente jóvenes, a través de espacios pedagógicos y artísticos. Vinculación de estudiantes, docentes, colectivos y organizaciones comunitarias.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Impacto Mediático y Redes</h4>
                <p className="text-gray-600 text-sm">Presencia sostenida en medios locales, páginas culturales y redes sociales. Generación de contenido audiovisual, entrevistas y transmisiones en vivo que ampliaron el alcance del festival.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Redes de Colaboración</h4>
                <p className="text-gray-600 text-sm">Articulación con festivales aliados, organizaciones LGBTQ+, colectivos audiovisuales y universidades. El festival se consolidó como un nodo dentro del ecosistema de cine queer latinoamericano.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Desarrollo Local</h4>
                <p className="text-gray-600 text-sm">Reactivación de espacios culturales barranquilleros. Oportunidades para creadores y gestores del Caribe colombiano en un contexto de diversidad e inclusión</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival2024;
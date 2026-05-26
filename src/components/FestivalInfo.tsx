import React from 'react';
import { Heart, Globe, Users, Award, Play, Film } from 'lucide-react';

const FestivalInfo = () => {
  return (
    <section id="festival" className="py-20 relative overflow-hidden bg-white">
      {/* Fondo decorativo sutil, similar al hero */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <img src="/Fondo.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-8 leading-tight">
              RECUENTO DEL FESTIVAL
            </h2>
            <div className="prose prose-lg text-purple-800 mb-8 space-y-6">
              <p>
                Con una misión de concientización y un profundo sentido de pertenencia, el Festival 
                de Cine Diverso impulsa actividades durante todo el año, llegando a distintas comunidades 
                de los territorios a través de una agenda constante de formación, exhibición y diálogo.
              </p>
              <p>
                Aunque su evento central se celebra en octubre, el festival mantiene una presencia activa 
                y comprometida, dejando huella en el tejido cultural de la región.
              </p>
              <p>
              A lo largo de los años, ha recorrido incansablemente los territorios, formando públicos, construyendo espacios para la diversidad y congregando a personas de todas las edades con historias que conectan, transforman y reflejan la riqueza de nuestras realidades.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-500 mb-2">150+</div>
                <p className="text-purple-700 font-medium">Películas Proyectadas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-500 mb-2">50K+</div>
                <p className="text-purple-700 font-medium">Espectadores</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-500 mb-2">25</div>
                <p className="text-purple-700 font-medium">Países Participantes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">8</div>
                <p className="text-purple-700 font-medium">Años de Historia</p>
              </div>
            </div>
          </div>
          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-purple-900 p-8">
                  <div className="w-20 h-20 bg-yellow-200/60 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Film className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">MEMORIAS DEL FESTIVAL</h3>
                  <p className="text-purple-700 mb-6">Edición 2024</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center transition-colors shadow-lg">
                    <Play className="w-6 h-6 ml-1 text-purple-900" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-yellow-400/30 text-purple-900 px-3 py-1 rounded text-sm">
                  Watch on YouTube
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Mission Statement */}
        <div className="mt-20 rounded-3xl p-12 text-white shadow-xl border border-purple-100"
             style={{
               background: 'linear-gradient(120deg, #6d28d9 0%, #fbbf24 100%)'
             }}>
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black mb-8">
              Nuestra Misión
            </h3>
            <p className="text-xl leading-relaxed mb-12">
            El Festival Internacional de Cine Diverso es un espacio de encuentro, formación y exhibición que trabaja durante todo el año por visibilizar y dignificar las voces y narrativas de poblaciones históricamente excluidas.
<br />
A través del cine, el festival promueve la diversidad, los derechos humanos y la transformación social, conectando territorios, construyendo públicos críticos y fortaleciendo una cultura audiovisual incluyente y participativa.
            </p>
            <p className="text-xl leading-relaxed mb-12">
              A través del cine, el festival promueve la diversidad, los derechos humanos y la transformación 
              social, conectando territorios, construyendo públicos críticos y fortaleciendo una cultura 
              audiovisual incluyente y participativa.
            </p>
            {/* Values */}
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-pink-200" />
                <h4 className="font-bold text-lg mb-2">Inclusión</h4>
                <p className="text-sm text-white/90">Espacio para todas las voces</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-green-200" />
                <h4 className="font-bold text-lg mb-2">Diversidad</h4>
                <p className="text-sm text-white/90">Historias de todo el mundo</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                <h4 className="font-bold text-lg mb-2">Comunidad</h4>
                <p className="text-sm text-white/90">Conectando audiencias</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
                <h4 className="font-bold text-lg mb-2">Excelencia</h4>
                <p className="text-sm text-white/90">Calidad cinematográfica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalInfo;
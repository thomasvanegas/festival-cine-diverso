import React from 'react';
import { Heart, Users, Film, Award, Globe, TreePine } from 'lucide-react';
import BackgroundDecoration from './ui/BackgroundDecoration';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 animate-fade-in">
      {/* Hero Section estilo 2023/2024 */}
      <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 py-24 overflow-hidden rounded-b-3xl">
        <BackgroundDecoration variant="default" bgImage="/Footer.png" opacity={0.8} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)] text-purple-900">
              QUIÉNES SOMOS
            </h1>
            <p className="text-xl md:text-2xl font-medium text-purple-700 drop-shadow-[0_2px_8px_rgba(236,72,153,0.4)]">
              Festival Internacional de Cine Diverso
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center space-x-4 mb-8">
            <TreePine className="w-16 h-16 text-yellow-300" />
            <Heart className="w-16 h-16 text-pink-300" />
            <TreePine className="w-16 h-16 text-purple-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-8">Nuestra Misión</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            El Festival Internacional de Cine Diverso es un espacio de encuentro, celebración y 
            resistencia que nace en Barranquilla, Colombia, con el propósito de visibilizar y 
            celebrar las narrativas LGBTIQ+ a través del arte cinematográfico. Nos mueve el arte, 
            la diversidad y las historias que nos habitan, creando un puente entre diferentes 
            culturas y realidades sociales.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-fade-in-up delay-200">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Fundado en 2023, el Festival Internacional de Cine Diverso surge como respuesta 
                a la necesidad de crear espacios seguros y celebratorios para las narrativas 
                LGBTIQ+ en el Caribe colombiano.
              </p>
              <p>
                Desde nuestra primera edición, hemos crecido hasta convertirnos en un referente 
                regional para el cine diverso, atrayendo participantes de más de 15 países y 
                consolidándonos como una plataforma vital para voces históricamente marginadas.
              </p>
              <p>
                Cada año, el festival evoluciona manteniendo su esencia: ser un jardín de voces 
                donde cada película es un brote nuevo que desafía las normas y embellece nuestro 
                paisaje social y cultural.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestros Valores</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Inclusión</h4>
                  <p className="text-gray-600">Creamos espacios seguros para todas las identidades</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Resistencia</h4>
                  <p className="text-gray-600">El arte como herramienta de transformación social</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Diversidad</h4>
                  <p className="text-gray-600">Celebramos la riqueza de las diferencias</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Film className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Excelencia</h4>
                  <p className="text-gray-600">Promovemos la calidad cinematográfica</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-12 text-white mb-16 animate-fade-in-up delay-300">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Impacto</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">3</div>
              <p className="text-green-100">Ediciones realizadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">120+</div>
              <p className="text-green-100">Cortometrajes exhibidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">20</div>
              <p className="text-green-100">Países participantes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">5,000+</div>
              <p className="text-green-100">Espectadores alcanzados</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white text-center animate-fade-in-up delay-500">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black mb-8">Nuestra Visión</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Ser el festival de cine LGBTIQ+ más importante del Caribe colombiano, 
            reconocido internacionalmente por su compromiso con la diversidad, 
            la calidad cinematográfica y su impacto en la transformación social.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Aspiramos a ser un catalizador de cambio que inspire políticas públicas 
            inclusivas y contribuya a la construcción de una sociedad más justa y equitativa 
            para todas las personas, especialmente para la población LGBTIQ+.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
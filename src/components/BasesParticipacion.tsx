import React from 'react';
import { Calendar, Award, FileText, Users, Film, TreePine, Heart, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BasesParticipacion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <NavLink to="/" className="inline-flex items-center text-purple-100 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </NavLink>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              III Festival Internacional de Cine Diverso
            </h1>
            <p className="text-xl md:text-2xl font-medium text-purple-100">
              Bases de Participación 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Festival Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Calendar className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Fecha del Festival</h3>
            <p className="text-purple-600 font-semibold">Del 21 al 25 de octubre de 2025</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <FileText className="w-10 h-10 text-pink-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Convocatoria Abierta</h3>
            <p className="text-pink-600 font-semibold">Del 20 de junio al 20 de septiembre de 2025</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Plataforma de Inscripción</h3>
            <p className="text-green-600 font-semibold">Festhome o formulario de inscripción</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Award className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Inscripción</h3>
            <p className="text-orange-600 font-semibold">Gratuita</p>
          </div>
        </div>

        {/* Concept Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-16 animate-fade-in-up delay-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-4 mb-8">
              <TreePine className="w-16 h-16 text-yellow-300" />
              <TreePine className="w-16 h-16 text-purple-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">Concepto 2025: Historias que nos habitan</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                En esta tercera edición del Festival Internacional de Cine Diverso, rendimos homenaje a 
                las raíces profundas y la fuerza imparable de la población Trans, usando como 
                emblema el roble amarillo y el roble morado, dos árboles icónicos de Barranquilla que, 
                como nuestras historias, resisten y florecen incluso en los terrenos más difíciles.
              </p>
              <p>
                Cada historia, aunque considerada básica por otros, es una semilla vital para nuestro 
                cine y nuestra memoria colectiva. Cada narrativa trans merece su espacio, su luz, su 
                reconocimiento. Este año, nuestras raíces se entrelazan con la esperanza de una Ley 
                Integral Trans y con el llamado urgente de justicia, visibilidad y dignidad. El festival es 
                un jardín de voces, de historias necesarias, donde cada película es un brote nuevo que 
                desafía las normas y embellece nuestro paisaje social y cultural.
              </p>
            </div>
          </div>
        </div>

        {/* Participation Rules */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-fade-in-up delay-300">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bases de Participación</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Podrán participar cortometrajes nacionales e internacionales con temática LGBTIQ+.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Se aceptan cortometrajes realizados desde el año 2020 en adelante.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Los cortometrajes deben tener una duración entre 4 y 30 minutos, incluyendo créditos.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Se aceptan cortometrajes de ficción y no ficción.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Si el idioma original del cortometraje no es español, se deben incluir subtítulos en español.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>No se aceptarán trabajos misóginos, homofóbicos o que promuevan cualquier tipo de discriminación.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La inscripción es gratuita y se realizará únicamente a través de Festhome o por medio del formulario de inscripción.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Premios</h3>
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium">La estatuilla del colibrí: símbolo de libertad, resistencia y belleza</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Mejor Cortometraje de Ficción Nacional</h4>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800">Mejor Cortometraje de No Ficción Nacional</h4>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Mejor Cortometraje de Ficción Internacional</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Mejor Cortometraje de No Ficción Internacional</h4>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Cada categoría recibirá:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• La estatuilla del colibrí: símbolo de libertad, resistencia y belleza</li>
                  <li>• Reconocimiento oficial por parte del festival</li>
                  <li>• Posibilidad de proyección en festivales internacionales aliados</li>
                  <li>• Incentivo económico</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 animate-fade-in-up delay-400">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Términos y Condiciones de Participación</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Festival Internacional de Cine Diverso 2025</h3>
              <p className="text-gray-600 mb-6">
                Al inscribir un cortometraje en el Festival Internacional de Cine Diverso 2025, la persona
                participante acepta los siguientes términos y condiciones, que rigen la convocatoria,
                selección, exhibición y posible circulación posterior de las obras audiovisuales recibidas.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">1. Derechos de Exhibición</h4>
                <p className="text-gray-600 mb-3">
                  La persona autoriza al Festival Internacional de Cine Diverso a proyectar su
                  cortometraje como parte de la programación oficial del festival, que se celebrará del 21
                  al 25 de octubre de 2025 en Barranquilla, Colombia. Así mismo, autoriza que su obra
                  pueda ser exhibida posteriormente en eventos, proyecciones especiales o muestras
                  itinerantes organizadas por el festival, o en colaboración con festivales aliados que
                  promuevan los derechos y visibilidad de las personas LGBTIQ+.
                </p>
                <p className="text-gray-600">
                  Esta autorización no tiene fines comerciales y no implica ningún tipo de cesión de
                  derechos patrimoniales.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">2. Responsabilidad sobre Derechos de Autor</h4>
                <p className="text-gray-600 mb-3">
                  El/la participante garantiza que posee todos los derechos necesarios para la inscripción
                  y proyección de la obra audiovisual, incluidos los derechos de autor, música, imágenes,
                  archivo, uso de voz, interpretación, etc. El festival no se hace responsable por
                  reclamaciones relacionadas con el uso indebido de derechos por parte de la persona
                  participante.
                </p>
                <p className="text-gray-600">
                  En caso de controversias legales o reclamos por derechos de terceros, la persona
                  participante asumirá toda la responsabilidad y eximirá al festival de cualquier
                  responsabilidad legal o económica.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">3. Autorización de Uso y Difusión</h4>
                <p className="text-gray-600">
                  Al participar en esta convocatoria, la persona titular de los derechos del cortometraje
                  autoriza al Festival Internacional de Cine Diverso a utilizar fragmentos de la obra,
                  imágenes, tráileres y material promocional con fines de difusión, comunicación y
                  promoción en medios impresos, digitales y audiovisuales relacionados con el festival y
                  sus actividades aliadas.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">4. Circulación Posterior</h4>
                <p className="text-gray-600">
                  Las obras seleccionadas podrán ser programadas en actividades del Festival
                  Internacional de Cine Diverso después de su edición 2025, siempre con fines
                  educativos, artísticos y sin ánimo de lucro, en contextos que promuevan el cine y los
                  derechos LGBTIQ+.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">5. Inscripción y Aceptación</h4>
                <p className="text-gray-600 mb-3">
                  La inscripción de un cortometraje implica la aceptación completa de los presentes
                  términos y condiciones. Toda obra que no cumpla con los requisitos establecidos en la
                  convocatoria podrá ser descalificada sin previo aviso.
                </p>
                <p className="text-gray-600">
                  El Festival se reserva el derecho de resolver cualquier caso no previsto en estas bases,
                  así como de tomar decisiones finales sobre la programación y selección.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-12 text-white text-center animate-fade-in-up delay-500">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">El Festival Internacional de Cine Diverso</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Es un espacio de encuentro, celebración y resistencia. Nos mueve el arte, la diversidad y las 
            historias que nos habitan. Invitamos a todas las personas creadoras a compartir sus obras y 
            sumarse a esta celebración del cine como herramienta de transformación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasesParticipacion; 
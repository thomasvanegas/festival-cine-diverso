import { Calendar, MapPin, Award, ExternalLink, TreePine, Heart, Users, Film } from 'lucide-react';

const Festival2025 = () => {
  // Selección Oficial 2025 - Ficción Nacional
  const ficcionNacional = [
    {
      title: 'La Máquina',
      year: '2023',
      director: 'Juan Diego Aguirre Gomez',
      description:
        'Después de una recaída, La Máquina, una mujer trans adicta al bazuco, regresa al instituto de rehabilitación para seguir con su tratamiento. Sin embargo, un nuevo interno pondrá en riesgo su voluntad y autocontrol.',
      url: 'https://drive.google.com/file/d/1QcLB9MetLsa8dX35O3VOLnflwri6XNMx/view?usp=sharing',
    },
    {
      title: 'Carne',
      year: '2022',
      director: 'Juan Diego Aguirre Gomez',
      description:
        'Jairo, un hombre gay de 50 años, que se dedica a la prostitución en un antro colombiano, no concibe otra vida fuera de lo que ya conoce, un submundo de ilegalidad, marginalidad y lujuria. Ese día, Helda, su patrona, le advierte que su ciclo en el lugar ha terminado.',
      url: 'https://drive.google.com/drive/folders/1fXaliJ2FU8TIrSH0tgtMQnzDnKxbtZCT?usp=sharing',
    },
    {
      title: 'Idilio',
      year: '2024',
      director: 'Luz Rincón Barahona',
      description:
        'Silvia y Victoria son las últimas sobrevivientes tras un cataclismo global que ha dejado el mundo en ruinas. Unidas por su dolor compartido y el anhelo de encontrar belleza en un mundo desolado, ambas mujeres hallan un nuevo hogar en la Sabana de Bogotá. Sin embargo, su tranquila vida se ve interrumpida cuando Victoria comienza a enfermar gravemente. Frente a lo inevitable, juntas, recorrerán los últimos días de su vida en un viaje de aceptación, reflexión y esperanza, aferrándose a la creencia de que el amor trasciende incluso la muerte, y que, en alguna otra vida, se volverán a encontrar.',
      url: 'https://drive.google.com/file/d/1eFP735z5Fmf3J1SJD7bWeXFjCwSNRWgH/view?usp=drive_link',
    },
    {
      title:
        'Amor en los tiempos de como sea que se llame el presente',
      year: '2025',
      director: 'Valentina Qaszulxkef',
      description:
        'En un museo de arte, ILONA (32), una pintora frustrada, trabaja como conserje por las noches. Mientras limpia, observa cómo las pinturas cobran vida dentro de sus marcos. Un día, el museo inaugura una nueva exposición de arte de la época de la Colonización Española, cuya obra principal retrata a varios hombres abusando de una esclava, GYLDA (30). La pintura impacta a Ilona, aún más cuando la ve cobrar vida y Gylda le pide ayuda. Ilona decide intervenir, recortando la silueta de Gylda y sacándola del cuadro para llevarla a casa. Allí, Gylda vuelve a la vida y logra salir del lienzo. Asustada, se saca el cuchillo del estómago y la pintura comienza a sangrar. Ilona busca óleos que había guardado y pinta sobre las heridas de Gylda, sanándola. Gylda, sorprendida por el acto de afecto, siente la primera caricia de empatía en toda su existencia. Juntas, pintan en un nuevo lienzo una playa donde van a vivir.',
      url: 'https://drive.google.com/file/d/1xLyQc2F_h5i7wjjBZPcMsGsSXIx3nWzx/view?usp=drive_link',
    },
    {
      title: 'Zona desbloqueada',
      year: '2025',
      director: 'Carlos Altamar-borja',
      description:
        'David y Ángel, en una tarde de tareas y videojuegos, se enfrentan a lo desconocido: una tensión entre ellos que los atrae mutuamente. Con el temor de tener que explorar zonas desconocidas, David trata de mantenerse en la raya, pese a estar en un nivel imposible de ganar.',
      url: 'https://drive.google.com/file/d/1CU4X-lBJJ5evjwlaYU7ZMpwWLASuOd8p/view?usp=drive_link',
    },
    {
      title: 'In voluptas',
      year: '2024',
      director: 'Alejandro Devia, Juan Mayorga',
      description:
        'En medio del ruido y la fragilidad de una fiesta, Laila y Draco se refugian en el baño como único lugar de respiro. Sin saber que en ese estrecho lugar encontrarán las respuestas, la libertad y la familia.',
      url: 'https://drive.google.com/file/d/10_GsDPNlTNDFdxsHA5Mjvu6bl_WlRhYV/view?usp=drive_link',
    },
    {
      title: 'El despertar',
      year: '2023',
      director: 'Juan Pablo Gelvez Bustamante',
      description:
        'Cristian, un joven universitario de 17 años, comienza a dudar sobre su orientación sexual tras conocer a un compañero de estudio, pero tanto por su educación como por su círculo social no se hace la idea de que lo que siente es real, por lo que tendrá que tomar una decisión en su vida.',
      url: 'https://drive.google.com/file/d/1g8G4Frvc6Oo5OpLP8hbCk5O17WcUQ5lA/view?usp=drive_link',
    },
    {
      title: 'Tacón roto',
      year: '2021',
      director: 'Julián Ehali',
      description:
        '"Tacón roto” cortometraje que retrata la travesía inesperada de Lola cuya noche cambia por completo cuando un hombre misterioso visita el burdel que frecuenta.',
      url: 'https://drive.google.com/file/d/1GyXItmxrqDiVGcOW_muPPPGoQiyESFeh/view?usp=drive_link',
    },
    {
      title: 'A dónde va el amor?',
      year: '2025',
      director: 'Junior Linares',
      description:
        'Un ser marcado por la ausencia busca, incansable, el calor de un amor que siempre se le escapa entre las manos. En cada intento, el vacío se hace más grande, hasta que el deseo de ser amado se convierte en un eco imposible de alcanzar. Frente a esa huida perpetua, la muerte aparece no como final, sino como refugio: una rendición silenciosa, una última forma de aceptar que incluso en la ausencia puede habitar la calma.',
      url: 'https://drive.google.com/file/d/1mAnoDTDLaO48BBm5oapSEu9bQSheSwxv/view?usp=drive_link',
    },
    {
      title: 'Bat Edukeyshon',
      year: '2025',
      director: 'Ramiro Ramírez',
      description:
        'En las duras afueras de Bogotá, Camilo, un joven mecánico e intelectual autodidacta, se enfrenta a su padre Miguel en una noche de confesiones y tormenta. Tras revelar que es gay, ambos desatan una confrontación marcada por la violencia, los silencios heredados y los deseos reprimidos. BAT EDUKEYSHON es un retrato íntimo y desgarrador sobre la masculinidad, el trauma y la posibilidad de reconciliarse con uno mismo y con los otros, incluso en medio del dolor.',
      url: 'https://drive.google.com/file/d/1bepAS3DjOypmR5tphNceXllWJv2saO1O/view?usp=drive_link',
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              III FESTIVAL INTERNACIONAL DE CINE DIVERSO 2025
            </h1>
            <p className="text-xl md:text-2xl font-medium text-purple-100 mb-8">
              Historias que nos habitan
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Festival Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fechas del Festival</h3>
            <p className="text-purple-600 font-semibold text-lg">21 - 25 de Octubre 2025</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <MapPin className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ubicación</h3>
            <p className="text-pink-600 font-semibold text-lg">Barranquilla, Colombia</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Inscripción</h3>
            <p className="text-green-600 font-semibold text-lg">Gratuita</p>
          </div>
        </div>

        {/* Concept Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-16 animate-fade-in-up delay-200">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-4 mb-8">
              <TreePine className="w-16 h-16 text-yellow-300" />
              <TreePine className="w-16 h-16 text-purple-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8">Concepto 2025: Historias que nos habitan</h2>
            <p className="text-lg leading-relaxed mb-8">
              En esta tercera edición del Festival Internacional de Cine Diverso, rendimos homenaje a 
              las raíces profundas y la fuerza imparable de la población Trans, usando como 
              emblema el roble amarillo y el roble morado, dos árboles icónicos de Barranquilla que, 
              como nuestras historias, resisten y florecen incluso en los terrenos más difíciles.
            </p>
            <p className="text-lg leading-relaxed">
              Cada historia, aunque considerada básica por otros, es una semilla vital para nuestro 
              cine y nuestra memoria colectiva. Este año, nuestras raíces se entrelazan con la esperanza de una Ley 
              Integral Trans y con el llamado urgente de justicia, visibilidad y dignidad.
            </p>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center mb-16 animate-fade-in-up delay-300">
          <h2 className="text-3xl md:text-4xl font-black mb-6">¡Convocatoria Abierta 2025!</h2>
          <p className="text-xl mb-8">Del 20 de junio al 20 de septiembre de 2025</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="https://filmmakers.festhome.com/festival/festival-de-cine-diverso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Inscríbete en Festhome
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1BsMiXy4irsas0OQOtPvgnJ0nvl4wwz-H/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Ver Dossier III
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Participation Rules */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-fade-in-up delay-400">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bases de Participación</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cortometrajes nacionales e internacionales con temática LGBTIQ+</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Realizados desde el año 2020 en adelante</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Duración entre 4 y 30 minutos (incluyendo créditos)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Se aceptan cortometrajes de ficción y no ficción</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Subtítulos en español si el idioma original no es español</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>No se aceptan trabajos misóginos, homofóbicos o discriminatorios</span>
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
                <h4 className="font-semibold text-gray-800 mb-2">Cada categoría recibe:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Estatuilla del colibrí</li>
                  <li>• Reconocimiento oficial</li>
                  <li>• Proyección en festivales aliados</li>
                  <li>• Incentivo económico</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Films Gallery - 2025 */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 animate-fade-in-up delay-400">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Selección Oficial 2025</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ficción Nacional — obras seleccionadas que exploran la diversidad, la memoria y el afecto
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ficción Nacional</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ficcionNacional.map((film, index) => (
              <div key={index} className="group relative">
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white flex flex-col max-h-[420px] overflow-hidden">
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 z-10">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <Film className="w-12 h-12 text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-gray-800 line-clamp-2">{film.title} <span className="text-gray-500 font-medium">— {film.year}</span></h4>
                    <p className="text-sm text-gray-600 line-clamp-1">por: {film.director}</p>
                    <p className="text-sm text-gray-700 line-clamp-4">
                      {film.description}
                    </p>
                  </div>
                  <div className="mt-4 mt-auto flex justify-between items-center">
                    <a
                      href={film.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
                    >
                      Ver obra
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Diversidad</h3>
              <p className="text-gray-600">Celebramos todas las identidades</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Resistencia</h3>
              <p className="text-gray-600">Historias que transforman</p>
            </div>
            <div className="text-center">
              <Film className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Arte</h3>
              <p className="text-gray-600">El cine como herramienta</p>
            </div>
            <div className="text-center">
              <TreePine className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Raíces</h3>
              <p className="text-gray-600">Memoria colectiva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival2025;